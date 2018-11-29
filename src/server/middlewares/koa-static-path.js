const send = require('koa-send')
const kindOf = require('kind-of')

const koaStaticPath = (root, pathname = '/', options = {}) => {
  const kindOfRoot = kindOf(root)
  if (kindOfRoot === 'undefined' || kindOfRoot !== 'string') {
    throw new TypeError('koa-static-path: `root` is required and expect to be string, please check the parameter you passed in.')
  }

  if (kindOf(pathname) === 'object') {
    options = pathname
    pathname = '/'
  }

  options = Object.assign({
    root
    // maxage: 86400000
  }, options)

  if (kindOf(pathname) !== 'string') {
    throw new TypeError('koa-static-path: `path` to be string, please check the parameter you passed in.')
  }

  const reg = new RegExp(`^(${pathname.replace(/(\/)/g, '\\$1')})`)

  return async (ctx, next) => {
    if (ctx.method !== 'GET' && ctx.method !== 'HEAD') return next()

    if (reg.test(ctx.path)) {
      const filepath = ctx.path.replace(reg, '')

      return send(ctx, filepath, options).catch(err => {
        if (err.code === 'ENOENT' && err.status === 404) {
          ctx.status = 404
          ctx.body = 'Not Found'
        }
      })
    }

    return next()
  }
}

module.exports = koaStaticPath
