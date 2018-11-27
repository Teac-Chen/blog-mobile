const Koa = require('koa')
const path = require('path')
const fs = require('fs')

const ReactDomServer = require('react-dom/server')
const config = require('../../config').baseConfig.node
const serverBundle = require('../../dist/js/server-entry').default

const app = new Koa()

const host = process.env.HOST || config.host
const port = process.env.PORT || config.port

app.on('error', err => {
  console.log('server error', err)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  let ms

  await next()

  ms = Date.now() - start

  ctx.set('X-Response-time', `${ms}ms`)

  console.log(`${ctx.method} ${ctx.url} - ${ctx.status} - ${ms}ms`)
})

app.use(async (ctx, next) => {
  let template = await fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf8')

  const context = {}

  const app = serverBundle(ctx.url, context)

  const content = ReactDomServer.renderToString(app)

  console.log('context ====>', context)
  if (context.url) {
    ctx.status = 301
    ctx.redirect(context.url)

    return
  }

  ctx.body = template.replace('<!-- App -->', content)
})

app.listen(port)

console.log(`listening on port ${host}:${port}`)
