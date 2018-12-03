const Router = require('koa-better-router')
const path = require('path')
const fs = require('fs')

const ReactDomServer = require('react-dom/server')
const serverBundle = require('../../dist/js/server-entry').default

const router = Router().loadMethods()

router.get('*', async (ctx, next) => {
  let template = await fs.readFileSync(path.resolve(__dirname, '../../dist/index.html'), 'utf8')

  const context = {}

  const app = serverBundle(ctx.url, context)

  const content = ReactDomServer.renderToString(app)

  if (context.url) {
    ctx.status = 301
    ctx.redirect(context.url)

    return
  }

  ctx.body = template.replace('<!-- App -->', content)
})

module.exports = router
