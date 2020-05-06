module.exports = {
  root: true,
  env: {
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    my: 'readonly',
    wx: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {

  },
};
