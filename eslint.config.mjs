import js from '@eslint/js';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import lodash from 'eslint-plugin-lodash';
import babelParser from '@babel/eslint-parser';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';

export default [
  // Ignore patterns
  {
    ignores: ['dist/**', 'node_modules/**', '.cache/**', '*.config.js', 'src/.temp/**']
  },
  
  // Base JavaScript recommended rules
  js.configs.recommended,
  
  // Vue plugin configuration
  ...vue.configs['flat/recommended'],
  
  // Lodash plugin
  {
    plugins: {
      lodash: lodash
    },
    rules: {
      ...lodash.configs.recommended.rules,
      // Disable overly strict lodash rules
      'lodash/prefer-lodash-typecheck': 'off',
      'lodash/prefer-lodash-method': 'off',
      'lodash/import-scope': 'off' // Allow default import for better tree-shaking
    }
  },
  
  // Test files configuration
  {
    files: ['**/__tests__/**', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Disable lodash rules in tests
      'lodash/prefer-lodash-typecheck': 'off',
      'lodash/prefer-lodash-method': 'off',
      // Allow component definitions in test files
      'vue/component-definition-name-casing': 'off',
      'vue/one-component-per-file': 'off',
      'vue/require-prop-types': 'off'
    }
  },
  
  // Prettier integration
  prettier,
  {
    plugins: {
      prettier: prettierPlugin
    },
    rules: {
      'prettier/prettier': 'error'
    }
  },
  
  // Global configuration for JS files
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env']
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Console and debugger rules
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // Allow single-word component names (common in Gridsome)
      'vue/multi-word-component-names': 'off'
    }
  },
  
  // Vue file-specific configuration
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        ecmaVersion: 2021,
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env']
        }
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    rules: {
      // Vue specific rules
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      'vue/multi-word-component-names': 'off', // Allow single-word names for layouts
      'vue/no-deprecated-destroyed-lifecycle': 'off', // Vue 2 uses beforeDestroy, not beforeUnmount
      'vue/attributes-order': 'off', // Disable attribute order rule
      'vue/order-in-components': 'off', // Disable component order rule
      
      // Console and debugger rules
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }
];

