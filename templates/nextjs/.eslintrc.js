module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    mocha: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 9,
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
  // Mainly covering Cypress tests and config files by default.
  extends: ['eslint:recommended', 'plugin:cypress/recommended', 'plugin:react/recommended'],
  rules: {
    // We will use TypeScript's types for component props instead.
    'react/prop-types': 'off',
  },
  overrides: [
    // This configuration will apply to all TypeScript files and React components.
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        react: { version: 'detect' },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
      ],
      rules: {
        // We will use TypeScript's types for component props instead.
        'react/prop-types': 'off',
        // No need to import React when using Next.js.
        'react/react-in-jsx-scope': 'off',
        // This rule is not compatible with Next.js's <Link /> components.
        'jsx-a11y/anchor-is-valid': 'off',
        // Why would you want unused vars?
        '@typescript-eslint/no-unused-vars': ['error'],
        // I suggest this setting for requiring return types on functions only where useful.
        '@typescript-eslint/explicit-function-return-type': [
          'off',
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
        // Includes .prettierrc.js rules.
        'prettier/prettier': ['warn', {}, { usePrettierrc: true }],
      },
    },
  ],
};
