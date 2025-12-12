#!/usr/bin/env node

/**
 * Testing Checklist Verification Script
 * Automatically verifies items from the testing checklist where possible
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m'
};

let passed = 0;
let failed = 0;
let skipped = 0;

function log(message, type = 'info') {
  const prefix = type === 'pass' ? `${colors.green}✓` : 
                 type === 'fail' ? `${colors.red}✗` : 
                 type === 'skip' ? `${colors.yellow}⊘` : 
                 `${colors.blue}ℹ`;
  console.log(`${prefix}${colors.reset} ${message}`);
}

function check(name, fn) {
  try {
    fn();
    log(name, 'pass');
    passed++;
    return true;
  } catch (error) {
    log(`${name}: ${error.message}`, 'fail');
    failed++;
    return false;
  }
}

function skip(name, reason) {
  log(`${name} (${reason})`, 'skip');
  skipped++;
}

console.log('\n🧪 Testing Checklist Verification\n');
console.log('='.repeat(50));

// 1. Verify build works
check('Build completes successfully', () => {
  try {
    execSync('yarn build', { stdio: 'pipe', timeout: 120000 });
  } catch (error) {
    throw new Error('Build failed');
  }
});

// 2. Verify tests pass
check('Tests pass', () => {
  try {
    execSync('yarn test', { stdio: 'pipe', timeout: 30000 });
  } catch (error) {
    throw new Error('Tests failed');
  }
});

// 3. Verify ESLint passes
check('ESLint passes (no errors)', () => {
  try {
    const result = execSync('yarn eslint src/ --max-warnings=0', { stdio: 'pipe', encoding: 'utf8' });
    // If there's any output, it means there are errors/warnings
    if (result && result.trim().length > 0) {
      throw new Error('ESLint found errors or warnings');
    }
  } catch (error) {
    // Check if it's actually an error or just exit code 1 with no output
    if (error.stdout && error.stdout.trim().length > 0) {
      throw new Error('ESLint found errors or warnings');
    }
    // If no output, it might be a false positive - check stderr
    if (error.stderr && error.stderr.trim().length > 0) {
      throw new Error('ESLint found errors or warnings');
    }
    // If exit code is 0, it's fine
    if (error.status === 0 || !error.status) {
      return; // Success
    }
    throw new Error('ESLint found errors or warnings');
  }
});

// 4. Verify Prettier formatting
check('Prettier formatting is correct', () => {
  try {
    execSync('yarn format:check', { stdio: 'pipe' });
  } catch (error) {
    throw new Error('Code is not properly formatted');
  }
});

// 5. Verify security headers exist
check('Security headers configured in netlify.toml', () => {
  const netlifyToml = fs.readFileSync('netlify.toml', 'utf8');
  const requiredHeaders = [
    'X-Frame-Options',
    'X-XSS-Protection',
    'X-Content-Type-Options',
    'Referrer-Policy'
  ];
  
  requiredHeaders.forEach(header => {
    if (!netlifyToml.includes(header)) {
      throw new Error(`Missing security header: ${header}`);
    }
  });
});

// 6. Verify package.json metadata
check('Package.json metadata is correct', () => {
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (pkg.name !== 'gridsome-starter-wikidata') {
    throw new Error('Package name should be "gridsome-starter-wikidata"');
  }
  if (!pkg.keywords.includes('masonry')) {
    throw new Error('Keyword "masonry" should be present');
  }
  if (pkg.keywords.includes('masonary')) {
    throw new Error('Typo "masonary" should not be present');
  }
});

// 7. Verify required files exist
check('Required documentation files exist', () => {
  const requiredFiles = [
    'README.md'
  ];
  
  requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
      throw new Error(`Missing file: ${file}`);
    }
  });
});

// 8. Verify test files exist
check('Test files exist', () => {
  const testDir = 'src/components/__tests__';
  if (!fs.existsSync(testDir)) {
    throw new Error('Test directory does not exist');
  }
  const testFiles = fs.readdirSync(testDir).filter(f => f.endsWith('.spec.js'));
  if (testFiles.length === 0) {
    throw new Error('No test files found');
  }
});

// 9. Verify accessibility attributes
check('Accessibility attributes present in components', () => {
  const componentFiles = [
    'src/components/ActionBar.vue',
    'src/components/ToggleTheme.vue',
    'src/components/ToggleView.vue'
  ];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    if (!content.includes('aria-label') && !content.includes('role=')) {
      throw new Error(`Missing accessibility attributes in ${file}`);
    }
  });
});

// 10. Verify alt text is dynamic
check('Alt text is dynamic (not hardcoded)', () => {
  const cardLayout = fs.readFileSync('src/components/CardLayout.vue', 'utf8');
  if (cardLayout.includes('alt="Cover image"')) {
    throw new Error('Alt text should be dynamic, not hardcoded');
  }
  if (!cardLayout.includes(':alt=')) {
    throw new Error('Alt text should use dynamic binding');
  }
});

// Manual checks (cannot be automated)
console.log('\n' + '='.repeat(50));
console.log('\n📋 Manual Checks (cannot be automated):\n');
skip('Test responsive design', 'Requires manual browser testing');
skip('Test accessibility with screen reader', 'Requires manual testing');
skip('Test PWA functionality', 'Requires manual testing');
skip('Test error scenarios', 'Requires manual testing');
skip('Test SEO meta tags', 'Requires manual testing with preview tools');
skip('Test CI/CD pipeline', 'Requires GitHub Actions run');

// Summary
console.log('\n' + '='.repeat(50));
console.log('\n📊 Summary:\n');
console.log(`${colors.green}Passed: ${passed}${colors.reset}`);
console.log(`${colors.red}Failed: ${failed}${colors.reset}`);
console.log(`${colors.yellow}Skipped: ${skipped}${colors.reset}`);
console.log(`\nTotal automated checks: ${passed + failed}`);

if (failed === 0) {
  console.log(`\n${colors.green}✅ All automated checks passed!${colors.reset}\n`);
  process.exit(0);
} else {
  console.log(`\n${colors.red}❌ Some checks failed. Please review the errors above.${colors.reset}\n`);
  process.exit(1);
}

