const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack-config-base')
const { baseConfig } = require('../config')

module.exports = merge(base, {
  mode: process.env.NODE_ENV,
  target: 'node',
  entry: path.resolve(__dirname, '../client/mobile/server-entry.js'),
  output: {
    filename: `${baseConfig.jsPath}/server-entry.js`,
    path: baseConfig.outPath,
    libraryTarget: 'commonjs2'
  }
})
