module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:vue/vue3-essential',
    'airbnb-base',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // indent: ['error', 2],
    'no-trailing-spaces': ['error'],
    'no-debugger': ['warn'],
    'consistent-return': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],
    semi: ['error', 'never'],
    'no-octal': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'vue/comment-directive': 'off',
    'import/prefer-default-export': 'off',
    'max-lines': [
      'error',
      {
        skipComments: true,
      },
    ],
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     ts: 'never',
    //     vue: 'never',
    //   },
    // ],
    'vue/this-in-template': ['error', 'never'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      registeredComponentsOnly: false,
    }],
    'vue/custom-event-name-casing': ['error',
      'kebab-case',
      {
        ignores: [],
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/require-name-property': ['error'],
    'vue/v-on-event-hyphenation': ['error', 'always', {
      autofix: true,
    }],
    'vue/v-on-function-call': ['error',
      'never',
      {
        ignoreIncludesComment: false,
      },
    ],
    'vue/no-multiple-template-root': ['off'],
    'no-var-requires': ['off'],
  },
}
