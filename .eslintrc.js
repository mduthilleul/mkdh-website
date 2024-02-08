module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'jest',
    '@typescript-eslint',
    'react',
    'react-native',
    'unused-imports',
    'simple-import-sort',
    'jsx-expressions',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    sourceType: 'module',
  },
  env: {
    'react-native/react-native': true,
  },
  rules: {
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        multilineDetection: 'brackets',
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['PascalCase'],
        prefix: ['is', 'are', 'should', 'has', 'can', 'had'],
        selector: ['variable', 'parameter', 'typeProperty'],
        types: ['boolean'],
      },
    ],
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-invalid-void-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/key-spacing': 'off',
    '@typescript-eslint/unbound-method': 'off',
    'key-spacing': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'jsx-expressions/strict-logical-expressions': 'error',
    'node/no-callback-literal': 'off',
    'no-catch-shadow': 'off',
    'no-console': ['error', {allow: ['warn', 'error', 'debug', 'info']}],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: [
              'TouchableOpacity',
              'TouchableHighlight',
              'KeyboardAvoidingView',
              'ScrollView',
              'FlatList',
              'Text',
              'Button',
              'View',
            ],
          },
          {
            name: 'react-native-config',
          },
          {
            name: 'react-native-gesture-handler',
          },
          {
            name: 'react-native-youtube-iframe',
            importNames: ['default'],
          },
          {
            name: 'native-base',
            importNames: ['Avatar', 'ImageBackground'],
          },
          {
            name: '@hookform/resolvers/yup',
            importNames: ['yupResolver'],
          },
          {
            name: 'yup',
          },
        ],
      },
    ],
    'no-shadow': 'off',
    'object-curly-spacing': 'off',
    'react-native/no-inline-styles': 'off',
    'react/jsx-key': ['error', {checkFragmentShorthand: true}],
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        vars: 'all',
        varsIgnorePattern: '^_',
      },
    ],
    'react/no-unstable-nested-components': 'off',
  },
}
