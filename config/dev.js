module.exports = {
  host: 'localhost',
  port: '1992',
  publicPath: '',
  autoOpenBrower: true,
  showErrorInScreen: true,
  proxyTable: {
    '/api': 'http://192.168.1.141:2018'
  }
}
