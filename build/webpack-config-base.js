const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '../client/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: path.resolve(__dirname, '../client/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }
    ]
  }
}
