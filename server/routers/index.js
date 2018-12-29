const Router = require('koa-router')
const {
  Article
} = require('../controllers')

const router = new Router({ prefix: '/api' })

router
  .get('/article/list', Article.list)
  .get('/article/get/:id', Article.get)

module.exports = router
