const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const { devConfig, baseConfig } = require('../config')
const base = require('./webpack-config-base')
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
  plugins: [
    new HtmlPlugin({
      title: 'hehe',
      template: path.resolve(__dirname, '../static/index.html'),
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
    hot: true,
    open: devConfig.autoOpenBrower,
    proxy: devConfig.proxyTable,
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
  config.plugins = config.plugins.concat([
    new MiniCssExtractPlugin({
      filename: isDev ? "css/[name].css" : "css/[name]-[hash:7].css",
      chunkFilename: isDev ? "css/[id].css" : "css/[id]-[hash:7].css"
    })
  ])
}

module.exports = merge(base, config)
