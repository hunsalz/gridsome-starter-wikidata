#!/usr/bin/env node

/**
 * Patch gridsome-source-wikidata to add retry logic for rate limiting
 * This script modifies the httpProxy.js to handle 429 errors with retries
 */

const fs = require('fs');
const path = require('path');

const pluginPath = path.join(__dirname, '../node_modules/gridsome-source-wikidata/httpProxy.js');

if (!fs.existsSync(pluginPath)) {
  console.log('Plugin not found, skipping patch');
  process.exit(0);
}

let content = fs.readFileSync(pluginPath, 'utf8');

// Check if already patched
if (content.includes('// PATCHED: retry logic')) {
  console.log('Plugin already patched');
  process.exit(0);
}

// Add retry helper function before the HttpProxy class
const retryHelper = `
// PATCHED: retry logic for rate limiting
async function retryWithBackoff(fn, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (error.response && error.response.statusCode === 429) {
        const delay = baseDelay * Math.pow(2, attempt);
        const retryAfter = error.response.headers && error.response.headers['retry-after'];
        const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : delay;
        
        if (attempt < maxRetries - 1) {
          console.warn(\`Rate limited (429), retrying in \${waitTime}ms (attempt \${attempt + 1}/\${maxRetries})...\`);
          await new Promise(resolve => setTimeout(resolve, waitTime));
          continue;
        }
      }
      throw error;
    }
  }
}
`;

// Insert retry helper before class definition
content = content.replace(/class HttpProxy/, retryHelper + '\nclass HttpProxy');

// Wrap save2disk method with retry logic
const save2diskStart = '  async save2disk(url, fileDir, filename) {';
const save2diskWrapper = `  async save2disk(url, fileDir, filename) {
    // PATCHED: Retry wrapper for rate limiting
    return retryWithBackoff(async () => {
      return await this._save2diskInternal(url, fileDir, filename);
    }, 3, 2000);
  }

  async _save2diskInternal(url, fileDir, filename) {`;

content = content.replace(save2diskStart, save2diskWrapper);

// Also patch the fetchJson method
const originalFetch = `    const json = await got(url, {
      headers: { Accept: "application/sparql-results+json" }
    }).json();`;

const patchedFetch = `    const json = await retryWithBackoff(
      () => got(url, {
        headers: { Accept: "application/sparql-results+json" }
      }).json(),
      3, // max retries
      2000 // base delay 2 seconds
    );`;

content = content.replace(originalFetch, patchedFetch);

// Add stream error handler in the Promise
// Find the Promise section and add error handler before closing
const promiseSection = /return new Promise\(\(resolve, reject\) => \{[\s\S]*?writer\.on\("error", err => \{[\s\S]*?reject\(err\);\s*\}\);/;
if (promiseSection.test(content)) {
  content = content.replace(
    /(writer\.on\("error", err => \{[\s\S]*?reject\(err\);\s*\}\);)/,
    `$1
      // PATCHED: Catch stream errors for retry logic
      response.on('error', (error) => {
        try {
          fs.unlink(path);
        } catch (e) {
          // Ignore unlink errors
        }
        // Convert to HTTPError format for retry logic
        const httpError = error.response ? error : new Error(error.message);
        if (!httpError.response) {
          httpError.response = { statusCode: error.statusCode || 500 };
        }
        reject(httpError);
      });`
  );
}

fs.writeFileSync(pluginPath, content, 'utf8');
console.log('Successfully patched gridsome-source-wikidata for rate limiting');
