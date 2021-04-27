module.exports = {
  extends: [
    'eslint-config-standard-jsx',
    'eslint-config-standard-react',
    './index.js',
  ],
  plugins: [
    'react-hooks',
  ],
  rules: {
    'template-curly-spacing': 'off', // enforced in eslint-config-standard, but not by us.
    'no-alert': 'off', // some of our react based apps still use it.
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'react/button-has-type': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-indent': 'error',
    'react/jsx-indent-props': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'no-console': [
      'warn',
      {
        allow: [ // allow custom logging of warnings and errors, but no info and log, since those are mainly used for debugging.
          'warn',
          'error',
        ],
      },
    ],
    'jsx-quotes': [
      'error', 'prefer-double',
    ],
    'react/jsx-key': 'error',
    'react/jsx-handler-names': 'off',
    'prefer-promise-reject-errors': 'off',
  },
}
