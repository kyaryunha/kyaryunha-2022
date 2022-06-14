module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'max-len': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unescaped-entities': 0,
    'react/no-array-index-key': 0,
    'react/no-danger': 0,
    'no-plusplus': 0,
    'no-nested-ternary': 0,
    'react/prop-types': 0,
    'jsx-a11y/aria-role': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'import/prefer-default-export': 0,
    'linebreak-style': 0,
  },
};
