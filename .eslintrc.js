module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    // 'standard'
    'plugin:react/recommended'
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "react/prop-types": [0],
    "strict": [
      "error",
      "safe"
    ], //prefer `'use-strict';` pragma
    "eqeqeq": "error", //prefer strict equality `===`
    "no-console": "warn", //allows but warn about console like `console.log()`
    // "no-unused-vars": "warn", //warns about unused variables
    "no-eval": "error", //disallows `eval()` usage
    "indent": [
      "error",
      2
    ], //enforce 2 space indents (not tabs)        
    "quotes": [
      "error",
      "single"
    ], //prefer single quotes over double quotes
    "semi": [
      "error",
      "always"
    ] //enforce semi-colon usage
  },
}