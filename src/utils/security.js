/**
 * Security utility functions for input validation and sanitization
 */

/**
 * Validates if a string is a valid URL
 * @param {string} url - The URL to validate
 * @param {Array<string>} allowedProtocols - Allowed protocols (default: ['http:', 'https:'])
 * @returns {boolean} True if URL is valid and uses allowed protocol
 */
export function isValidUrl(url, allowedProtocols = ["http:", "https:"]) {
  if (!url || typeof url !== "string") {
    return false;
  }

  try {
    const urlObj = new URL(url);
    return allowedProtocols.includes(urlObj.protocol);
  } catch {
    // URL constructor throws for invalid URLs
    return false;
  }
}

/**
 * Validates and sanitizes a URL, returning a safe URL or null
 * @param {string} url - The URL to validate and sanitize
 * @param {Array<string>} allowedProtocols - Allowed protocols
 * @returns {string|null} Valid URL or null if invalid
 */
export function sanitizeUrl(url, allowedProtocols = ["http:", "https:"]) {
  if (!isValidUrl(url, allowedProtocols)) {
    return null;
  }

  try {
    const urlObj = new URL(url);
    // Remove potentially dangerous parts
    urlObj.hash = ""; // Remove hash fragments
    return urlObj.toString();
  } catch {
    return null;
  }
}

/**
 * Validates environment variable URL
 * @param {string} url - The URL from environment variable
 * @returns {string} Valid URL or default fallback
 */
export function validateSiteUrl(url) {
  if (!url || typeof url !== "string") {
    return "https://hunsalz.github.io";
  }

  // Ensure URL has protocol
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return "https://hunsalz.github.io";
  }

  if (isValidUrl(url, ["https:"])) {
    return url;
  }

  return "https://hunsalz.github.io";
}

/**
 * Validates and sanitizes path prefix
 * @param {string} pathPrefix - The path prefix to validate
 * @returns {string} Valid path prefix
 */
export function validatePathPrefix(pathPrefix) {
  if (!pathPrefix || typeof pathPrefix !== "string") {
    return "/gridsome-starter-wikidata";
  }

  // Ensure it starts with / and doesn't contain dangerous characters
  let sanitized = pathPrefix.trim();
  if (!sanitized.startsWith("/")) {
    sanitized = "/" + sanitized;
  }

  // Remove any path traversal attempts
  sanitized = sanitized.replace(/\.\./g, "");
  // Remove any query strings or fragments
  sanitized = sanitized.split("?")[0].split("#")[0];

  return sanitized || "/gridsome-starter-wikidata";
}

/**
 * Sanitizes text content to prevent XSS in meta tags
 * @param {string} text - The text to sanitize
 * @param {number} maxLength - Maximum length (default: 200)
 * @returns {string} Sanitized text
 */
export function sanitizeMetaContent(text, maxLength = 200) {
  if (!text || typeof text !== "string") {
    return "";
  }

  // Remove HTML tags
  let sanitized = text.replace(/<[^>]*>/g, "");
  // Remove potentially dangerous characters
  sanitized = sanitized.replace(/[<>"']/g, "");
  // Trim and limit length
  sanitized = sanitized.trim().substring(0, maxLength);

  return sanitized;
}
