module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', 'prefer-arrow', 'jsx-a11y', 'import'],

  ignorePatterns: ['node_modules', 'build'],

  rules: {
    // Import
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'type'],
        pathGroups: [
          { pattern: 'react', group: 'builtin', position: 'before' },

          { pattern: '@assets/**', group: 'sibling' },
          { pattern: '@styles/**', group: 'sibling' },

          { pattern: '@common/**', group: 'sibling' },
          { pattern: '@images/**', group: 'sibling' },
          { pattern: '@layouts', group: 'sibling' },
          { pattern: '@layouts/**', group: 'sibling' },
          { pattern: '@shared', group: 'sibling' },
          { pattern: '@shared/**', group: 'sibling' },

          { pattern: '@pages', group: 'sibling' },
          { pattern: '@pages/**', group: 'sibling' },

          { pattern: '@configs/**', group: 'sibling' },

          { pattern: '@contexts', group: 'sibling' },
          { pattern: '@contexts/**', group: 'sibling' },

          { pattern: '@hooks', group: 'sibling' },
          { pattern: '@hooks/**', group: 'sibling' },

          { pattern: '@store', group: 'sibling' },
          { pattern: '@store/**', group: 'sibling' },

          { pattern: '@theme', group: 'sibling' },
          { pattern: '@theme/**', group: 'sibling' },

          { pattern: '@appTypes', group: 'type' },
          { pattern: '@appTypes/**', group: 'type' },

          { pattern: '@utils/**', group: 'sibling' },

          { pattern: '@validations', group: 'sibling' },
          { pattern: '@validations/**', group: 'sibling' },
        ],
        pathGroupsExcludedImportTypes: ['react', 'builtin', 'type', 'sibling'],
        'newlines-between': 'always',
      },
    ],

    // No statements
    'no-alert': 'warn',
    'no-empty': 'warn',
    'no-undef': 'warn',
    'no-shadow': 'off',
    'no-bitwise': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'off',
    'no-return-await': 'off',
    'no-useless-catch': 'off',
    'no-return-assign': 'off',
    'no-nested-ternary': 'off',
    'no-mixed-operators': 'off',
    'no-use-before-define': 'off', // for React,will turned `on` after fixing issue
    'no-restricted-syntax': 'off', // if needed you can use it to restrict the use of certain syntax
    'no-prototype-builtins': 'off',
    'no-case-declarations': 'error',
    'no-unused-expressions': 'warn',
    'no-constant-condition': 'warn',
    'no-restricted-properties': 'error',

    // React
    'react/display-name': 'off',
    'react/no-children-prop': ['error', { allowFunctions: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-indent': ['error', 2, { indentLogicalExpressions: true, checkAttributes: false }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/button-has-type': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // TypeScript
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-shadow': 'error', // TODO: check it and if needed change to 'off'
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
        multilineDetection: 'brackets',
      },
    ],

    // Prettify
    'max-len': [
      'error',
      120,
      2,
      {
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          ':': 'before',
          '?': 'before',
          '+': 'after',
          '=': 'after',
          '||': 'ignore',
          '&&': 'ignore',
        },
      },
    ],
    'brace-style': ['error', '1tbs'],
    curly: ['error', 'all'],
    'object-curly-newline': 'off',
    'consistent-return': 'off',
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'only-multiline'],
    'eol-last': 'error',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'function-paren-newline': ['warn', 'multiline-arguments'],
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: '*', next: 'let' },
      { blankLine: 'always', prev: '*', next: 'const' },
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: 'block', next: '*' },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: 'let', next: '*' },
      { blankLine: 'any', prev: 'let', next: 'let' },
      { blankLine: 'any', prev: 'let', next: 'const' },
      { blankLine: 'always', prev: 'multiline-let', next: '*' },
      { blankLine: 'always', prev: 'const', next: '*' },
      { blankLine: 'any', prev: 'const', next: 'const' },
      { blankLine: 'any', prev: 'const', next: 'let' },
      { blankLine: 'always', prev: 'multiline-const', next: '*' },
    ],

    // jsx-a11y
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/label-has-associated-control': 'off',

    // Prefer arrow functions
    'prefer-arrow-callback': 'error',
    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: false,
        singleReturnOnly: false,
        classPropertiesAllowed: true,
      },
    ],
  },

  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // It will default to "latest" and warn if missing, and to "detect" in the future
      flowVersion: '0.53', // Flow version
    },
    propWrapperFunctions: [
      // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
      'forbidExtraProps',
      { property: 'freeze', object: 'Object' },
      { property: 'myFavoriteWrapper' },
      // for rules that check exact prop wrappers
      { property: 'forbidExtraProps', exact: true },
    ],
    componentWrapperFunctions: [
      // The name of any function used to wrap components, e.g. Mobx `observer` function. If this isn't set, components wrapped by these functions will be skipped.
      'observer', // `property`
      { property: 'styled' }, // `object` is optional
      { property: 'observer', object: 'Mobx' },
      { property: 'observer', object: '<pragma>' }, // sets `object` to whatever value `settings.react.pragma` is set to
    ],
    formComponents: [
      // Components used as alternatives to <form> for forms, eg. <Form endpoint={ url } />
      'CustomForm',
      { name: 'Form', formAttribute: 'endpoint' },
    ],
    linkComponents: [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      'Hyperlink',
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
};
