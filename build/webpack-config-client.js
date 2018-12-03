const webpack = require('webpack')
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { devConfig, baseConfig } = require('../config')
const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    main: path.resolve(__dirname, '../client/mobile/app.js')
  },
  output: {
    filename: `${baseConfig.jsPath}/[name]-[hash:5].js`,
    path: baseConfig.outPath,
    publicPath: baseConfig.publicPath
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
        include: path.resolve(__dirname, '../client/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader?cacheDirectory',
        include: path.resolve(__dirname, '../client/mobile'),
        exclude: path.resolve(__dirname, '../node_modules')
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'hehe',
      template: path.resolve(__dirname, '../static/index.html'),
      // favicon: isDev ? path.resolve(__dirname, '../favicon.ico') : '',
      cache: true
    })
  ]
}

if (isDev) {
  config.devServer = {
    host: devConfig.host,
    port: devConfig.port,
    contentBase: baseConfig.outPath,
    publicPath: baseConfig.publicPath,
    // compress: true,
    hot: true,
    open: devConfig.autoOpenBrower,
    historyApiFallback: {
      index: `${baseConfig.publicPath}/index.html`,
      rewrites: [
        { from: /\/favicon.ico/, to: `${baseConfig.publicPath}/favicon.ico`}
      ]
    },
    overlay: devConfig.showErrorInScreen
      ? { warnings: true, errors: true }
      : false
  }
  config.mode = 'development'
  config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../favicon.ico'), to: path.resolve(__dirname, '../dist') }])
  ])
} else {
  config.mode = 'production'
}

module.exports = config
