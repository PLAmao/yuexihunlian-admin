module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 'off',
    camelcase: 'off',
    semi: [2, 'never'],
    'comma-dangle': 'off',
    'no-useless-escape': 'off',
    // 'no-useless-return': 'off',
    'no-new': 'off',
    'prefer-promise-reject-errors': ['off', { allowEmptyReject: true }],
    'no-throw-literal': 'off',
    'handle-callback-err': 'off',
    'vue/multi-word-component-names': 'off',
    'node/handle-callback-err': 'off',
  },
}
