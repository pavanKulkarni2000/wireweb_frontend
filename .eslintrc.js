module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 12,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 0,
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'max-len': 0,
    'no-unused-vars': 0,
    'linebreak-style': ['error', 'unix'],
  },
};
