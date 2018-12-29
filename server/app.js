const Koa = require('koa')
const path = require('path')
const favicon = require('koa-favicon')

const logTime = require('./middlewares/log-time')
// const koaStaticPath = require('./middlewares/koa-static-path')
const router = require('./routers')

const config = require('../config').baseConfig.node
// const isDev = process.env.NODE_ENV === 'development'
// const serverRender = isDev ? require('./utils/server-render-dev') : require('./utils/server-render-pro')

const app = new Koa()

const host = process.env.HOST || config.host
const port = process.env.PORT || config.port

app.on('error', err => {
  console.log('server error', err)
})

app
  .use(logTime)
  .use(router.routes())
  .use(router.allowedMethods())
  .use(favicon(path.resolve(__dirname, '../favicon.ico')))

// if (isDev) {
//   serverRender(app)
// } else {
//   app
//     .use(koaStaticPath(path.resolve(__dirname, '../dist'), '/public'))
//     .use(serverRender.middleware())
// }

app.listen(port)

console.log(`listening on port ${host}:${port}`)
