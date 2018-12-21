module.exports = {
  parser: 'babel-eslint',
  extends: 'react-app',
  plugins: ['flow', 'prettier', 'react-hooks'],
  globals: {
    Promise: true
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    'flowtype/generic-spacing': 'off',
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'no-param-reassign': 'error',
    'no-unused-vars': 'error',
    eqeqeq: ['error', 'smart'],
    curly: 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    quotes: ['error', 'single', { avoidEscape: true }],
    'react-hooks/rules-of-hooks': 'error'
  }
};
