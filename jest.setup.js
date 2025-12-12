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

// Mock Gridsome components
jest.mock('gridsome', () => ({
  gImage: {
    name: 'g-image',
    functional: true,
    render: (h, { props }) => h('img', { attrs: props })
  },
  gLink: {
    name: 'g-link',
    functional: true,
    render: (h, { props, children }) => h('a', { attrs: { href: props.to } }, children)
  }
}));

