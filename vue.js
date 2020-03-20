module.exports = {
  extends: [
    './index.js',
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'vue/html-indent': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/require-prop-types': 'error',
  },
}