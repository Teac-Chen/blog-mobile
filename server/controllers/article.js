const axios = require('axios')

exports.list = async ctx => {
  ctx.body = {
    success: true,
    list: [{
      id: '5433d5e4e737cbe96dcef312',
      title: '从零构建TeacBlog',
      image: 'https://img4.mukewang.com/szimg/59b8a486000107fb05400300.jpg',
      read: 5000,
      summary: 'React, Webpack, Redux, Koa2, NodeJS从零构建一个SSR的博客应用',
      date: '2018-12-14 18:36:26'
    }]
  }
}

exports.get = async ctx => {
  const result = await axios.get(`https://cnodejs.org/api/v1/topic/${ctx.params.id}`)

  ctx.body = {
    code: 1,
    data: result.data
  }
}
