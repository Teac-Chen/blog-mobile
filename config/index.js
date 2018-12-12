const path = require('path')

const devConfig = require('./dev')
const buildConfig = require('./build')

module.exports = {
  baseConfig: {
    jsPath: 'js',
    outPath: path.resolve(__dirname, '../dist'),
    publicPath: '/public',
    node: {
      port: 2019,
      host: '0.0.0.0'
    }
  },
  devConfig,
  buildConfig
}
