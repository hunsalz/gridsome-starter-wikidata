/**
 * Client-side utility functions
 * Provides consistent patterns for checking client/server environment
 */

/**
 * Checks if code is running on the client side
 * @returns {boolean} True if running on client
 */
export function isClient() {
  return process.isClient;
}

/**
 * Checks if code is running in development environment
 * @returns {boolean} True if running in development (localhost)
 */
export function isDevelopment() {
  return process.isClient && window.location.hostname === "localhost";
}

/**
 * Safely executes a function only on the client side
 * @param {Function} fn - Function to execute
 * @param {*} defaultValue - Default value to return if not on client
 * @returns {*} Result of function or default value
 */
export function clientOnly(fn, defaultValue = undefined) {
  if (process.isClient) {
    return fn();
  }
  return defaultValue;
}
