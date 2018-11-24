const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/app.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '../src'),
        exclude: path.resolve(__dirname, '../node_modules')
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: path.resolve(__dirname, '../src'),
        exclude: path.resolve(__dirname, '../node_modules')
      }
    ]
  }
}