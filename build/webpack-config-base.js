const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

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
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
              plugins: [require('autoprefixer')()]
            }
          },
          'sass-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: isDev ? '[name].[ext]' : '[name]-[hash:7].[ext]',
            outputPath: '/fonts/'
          }
        }]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: isDev ? '[name].[ext]' : '[name]-[hash:7].[ext]',
            outputPath: '/images/'
          }
        }]
      }
    ]
  }
}
