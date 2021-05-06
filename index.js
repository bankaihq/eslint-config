module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint-config-standard',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [
    'import',
  ],
  rules: {
    semi: [
      'error',
      'never',
    ],
    indent: [
      'error',
      2,
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    quotes: [
      'error',
      'single',
    ],
    'array-bracket-spacing': [
      'error',
      'always',
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'no-console': [
      'error',
      {
        allow: [
          'warn',
          'error',
        ],
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never',
      },
    ],
  },
}
