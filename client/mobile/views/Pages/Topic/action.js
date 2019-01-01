import axios from 'axios'

export function getArticleList(dispatch) {
  axios.get('/api/article/list')
    .then((result) => {
      dispatch({
        type: 'INIT_ARTICLE',
        list: result.data.list,
      })
    })
    .catch((err) => {
      alert(err.message) // eslint-disable-line
    })
}

export function getArticle(dispatch, id) {
  axios.get(`/api/article/get/${id}`)
    .then((result) => {
      dispatch({
        type: 'CUR_ARTICLE',
        article: result.data.data.data.content,
      })
    })
    .catch((err) => {
      alert(err.message) // eslint-disable-line
    })
}
