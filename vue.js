module.exports = {
  extends: [
    '@vue/standard',
    'plugin:vue/essential',
    './index.js',
  ],
  rules: {
    'vue/html-indent': 'error',
    'vue/max-attributes-per-line': 'error',
    'vue/require-prop-types': 'error',
  },
}
