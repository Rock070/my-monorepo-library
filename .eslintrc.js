module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-console': ['error', {
      allow: ['warn', 'error', 'debug', 'assert']
    }],
    'no-unused-vars': 'warn',
    'vue/no-template-target-blank': ['error', {
      enforceDynamicLinks: 'always'
    }]

  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}
