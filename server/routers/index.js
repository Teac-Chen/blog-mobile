const Router = require('koa-better-router')
const {
  Article
} = require('controllers')

const router = Router({prefix: '/api'}).loadMethods()

router.get('article/list', Article.list)
