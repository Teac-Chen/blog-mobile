const logTime = async (ctx, next) => {
  const start = Date.now()
  let ms

  await next()

  ms = Date.now() - start

  ctx.set('X-Response-time', `${ms}ms`)

  console.log(`${ctx.method} ${ctx.url} - ${ctx.status} - ${ms}ms`)
}

module.exports = logTime
