module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  // 覆盖eslint格式配置，写在数组的最后
  extends: ['standard-with-typescript', 'plugin: prettier/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/semi': 'off',
    semi: 'off'
  },
  includePaths: ['./src/**/*']
};
