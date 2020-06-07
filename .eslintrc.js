// Differentiates between production build and production env situations.
// Dev builds have a production env but are not production builds.
const isProdBuild = process.env.VUE_APP_BUILD_MODE === 'prod';

module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],

  rules: {
    'no-console': 'off',
    'no-debugger': isProdBuild ? 'error' : 'off',
    'space-before-function-paren': ['error', 'always'],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': ['error', 'consistent'],
    'linebreak-style': [
      'error', (process.platform === 'win32' ? 'windows' : 'unix'),
    ],
    'object-shorthand': ['error', 'always', { avoidQuotes: false }],
    'no-nested-ternary': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-cond-assign': ['error', 'except-parens'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'max-len': [
      /**
       * Ignores pattern of long html tags starting with zero or more spaces,
       * then has a '<link ' or '<meta ' opening tag, has any number of
       * characters following after that, but ends with a closing tag.
       * These patterns are found in the <head> section of index.html.
       *
       * @vue/eslint default setting for code max-len seems to be 100 char
       * rather than the eslint default of 80. I add a bit for // use.
       */
      'error', {
        code: 84,
        ignorePattern: '^(\\s*<(link |meta ).*)(>)$',
        ignoreUrls: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};
