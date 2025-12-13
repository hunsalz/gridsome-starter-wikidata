module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // Target modern browsers (last 2 versions, no IE11)
        // This reduces bundle size by not transpiling modern JavaScript features
        targets: {
          browsers: [
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Safari versions",
            "last 2 Edge versions"
          ]
        },
        // Don't include polyfills automatically (we'll add only what we need)
        useBuiltIns: false,
        // Don't transform modules (let webpack handle it)
        modules: false,
        // Exclude unnecessary transforms for modern browsers
        exclude: [
          "transform-typeof-symbol",
          "transform-unicode-regex",
          "transform-sticky-regex",
          "transform-new-target",
          "transform-modules-commonjs"
        ]
      }
    ]
  ],
  // Only include transforms needed for modern browsers
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current"
            }
          }
        ]
      ]
    }
  }
};

