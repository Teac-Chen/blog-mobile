const path = require('path')

const devConfig = require('./dev')
const buildConfig = require('./build')

module.exports = {
  baseConfig: {
    staticPath: 'js',
    outPath: path.resolve(__dirname, '../dist'),
    node: {
      port: 2018,
      host: '0.0.0.0'
    }
  },
  devConfig,
  buildConfig
}
