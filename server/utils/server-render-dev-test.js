const webpack = require('webpack')
const Router = require('koa-better-router')

const webpackDevMiddleware = require('../middlewares/koa-webpack-dev-middleware')
const webpackHotMiddleware = require('../middlewares/koa-webpack-hot-middleware')
const webpackClientConfig = require('../../build/webpack-config-client')
const webpackServerConfig = require('../../build/webpack-config-server')

const clientCompiler = webpack(webpackClientConfig)
const serverCompiler = webpack(webpackServerConfig)

module.exports = app => {
  app
    .use(webpackDevMiddleware(clientCompiler, { noInfo: true, publicPath: webpackClientConfig.output.publicPath }))
    .use(webpackDevMiddleware(serverCompiler, { noInfo: true, publicPath: webpackServerConfig.output.publicPath }))
    .use(webpackHotMiddleware(clientCompiler))

  const router = Router().loadMethods()

  router.get('*', async ctx => {
    // console.log(ctx.webpack, this.webpack)
    // const html = await ctx.webpack.fileSystem.readFileSync('index.html')
    // console.log(html)

    ctx.body = JSON.stringify(ctx.webpack)
  })

  app.use(router.middleware())
}
