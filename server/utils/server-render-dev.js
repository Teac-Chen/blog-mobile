const axios = require('axios')
const path = require('path')
const MemoryFs = require('memory-fs')
const webpack = require('webpack')
const Router = require('koa-better-router')
const proxy = require('koa-proxies')
const ReactDomServer = require('react-dom/server')
const NativeModule = require('module')
const vm = require('vm')

const webpackServerConfig = require('../../build/webpack-config-server')
const { baseConfig, devConfig } = require('../../config')

function getModuleFromMemory (bundle, filename) {
  const m = { exports: {} }
  const wrapper = NativeModule.wrap(bundle)
  const script = new vm.Script(wrapper, {
    filename,
    displayErrors: true
  })
  const result = script.runInThisContext()
  result.call(m.exports, m.exports, require, m)

  return m
}

const mfs = new MemoryFs()
const serverCompiler = webpack(webpackServerConfig)

let serverBundle
serverCompiler.outputFileSystem = mfs
serverCompiler.watch({}, (err, stats) => {
  if (err) throw err

  stats = stats.toJson()
  stats.errors.forEach(err => console.error('webpack err ===> ', err))
  stats.warnings.forEach(warn => console.warn('webpack warn ===> ', warn))

  const bundlePath = path.join(
    webpackServerConfig.output.path,
    webpackServerConfig.output.filename
  )

  const bundle = mfs.readFileSync(bundlePath, 'utf-8')

  const m = getModuleFromMemory(bundle, 'server-entry.js')

  serverBundle = m.exports.default
})

module.exports = (app) => {
  const router = Router().loadMethods()

  app.use(proxy(baseConfig.publicPath, {
    target: `http://localhost:${devConfig.port}`,
    logs: true
  }))

  router.get('*', async ctx => {
    if (!serverBundle) {
      ctx.body = '页面正在维护中，请稍后！'
      return
    }

    if (!ctx.body) {
      const template = await axios.get(`http://localhost:${devConfig.port}${baseConfig.publicPath}/index.html`)

      const context = {}
      const app = serverBundle(ctx.url, context)

      const content = ReactDomServer.renderToString(app)

      if (context.url) {
        ctx.status = 301
        ctx.redirect(context.url)

        return
      }

      ctx.body = template.data.replace('<!-- App -->', content)
    }
  })

  app.use(router.middleware())
}
