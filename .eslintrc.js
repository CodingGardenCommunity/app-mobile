module.exports = {
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
  ],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'error',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'error',
    'comma-dangle': 'off'
  },
  'globals': {
    "fetch": true
  }
}
