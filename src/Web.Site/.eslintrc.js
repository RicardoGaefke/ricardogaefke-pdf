const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
    }
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "parserOptions": {
      "jsx": true,
      "useJSXTextNode": true,
      "project": "./tsconfig.json"
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'import'
  ],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": "error",
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/prefer-stateless-function": "error",
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }],
    "max-len": [2, 150, 2],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
  }
};
