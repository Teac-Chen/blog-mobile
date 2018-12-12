const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@m': path.resolve('client/mobile')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: 'eslint-loader',
        include: path.resolve(__dirname, '../client/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }, {
        test: /\.jsx?$/,
        use: 'babel-loader?cacheDirectory',
        include: path.resolve(__dirname, '../client/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
