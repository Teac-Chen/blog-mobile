import axios from 'axios'

export function getArticle(dispatch) {
  axios('/api/article/list')
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

export function getTitle() {}
