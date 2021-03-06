const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: isDev,
              plugins: [require('autoprefixer')()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, '../client/mobile/styles')]
            }
          }
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
            name: isDev ? 'fonts/[name].[ext]' : 'fonts/[name]-[hash:7].[ext]'
          }
        }]
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: isDev ? 'images/[name].[ext]' : 'images/[name]-[hash:7].[ext]'
          }
        }]
      }
    ]
  }
}
