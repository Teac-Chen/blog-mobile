const path = require('path')
const { baseConfig } = require('../config')

module.exports = {
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: path.resolve(__dirname, '../src/mobile/server-entry.js'),
  output: {
    filename: `${baseConfig.staticPath}/server-entry.js`,
    path: baseConfig.outPath,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '../src/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: path.resolve(__dirname, '../src/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }
    ]
  }
}
