module.exports = {
  host: 'localhost',
  port: '1992',
  publicPath: '',
  autoOpenBrower: true,
  showErrorInScreen: true,
  proxyTable: {
    '/api': 'http://localhost:2019'
  }
}
