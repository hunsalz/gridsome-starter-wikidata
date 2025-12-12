// Jest setup file
// Mock Gridsome-specific globals
global.process = {
  ...global.process,
  isClient: true,
  isServer: false,
  env: {
    NODE_ENV: "test"
  }
};

// Mock window object if needed
if (typeof window !== "undefined") {
  window.__theme = "light";
  window.__onThemeChange = function() {};
  window.__setPreferredTheme = function() {};
}

