module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true
  },
  plugins: ["lodash"],
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier", // Replaced deprecated prettier/vue
    "plugin:lodash/recommended",
    "plugin:prettier/recommended"
  ],
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2021,
    sourceType: "module"
  }
};
