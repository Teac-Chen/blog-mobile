import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

class ArticleList extends React.Component {
  componentDidMount() {
    axios.get('/api/article/list')
      .then((result) => {
        const { data } = result
        const { dispatch } = this.props
        if (data.success) {
          dispatch({
            type: 'INIT_ARTICLE',
            list: data.list,
          })
        }
      })
  }

  render() {
    const { article } = this.props
    return (
      <ul>
        {article.map(item => (
          <li key={item.title}>
            {item.title}
            <br />
            作者：
            {item.auther}
            <br />
            简介：
            {item.summary}
          </li>
        ))}
      </ul>
    )
  }
}

ArticleList.propTypes = {
  article: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    auther: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  article: state.article,
})

export default connect(mapStateToProps)(ArticleList)
