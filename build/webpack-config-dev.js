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
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: [
          path.resolve(__dirname, '../src')
        ],
        exclude: [
          path.resolve(__dirname, '../node_modules')
        ]
      }
    ]
  }
}