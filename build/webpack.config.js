const path = require('path');

const resolve = fileName => path.resolve(__dirname, '../', fileName);

module.exports = {
  mode: 'production',
  entry: {
    'mini-program-request': resolve('./src/index.js'),
  },
  output: {
    path: resolve('./lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
