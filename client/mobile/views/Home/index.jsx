import React from 'react'
import { Link, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getArticle } from './action'
import './index.scss'

import Topics from './Topics'
import TopicDetail from './TopicDetail'

class Home extends React.Component {
  static propTypes = {
    article: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      read: PropTypes.number.isRequired,
      summary: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props
    getArticle(dispatch)
  }

  render() {
    const { article, match: { path } } = this.props
    return (
      <React.Fragment>
        <div className="banner">
          <div className="bannerContainer">
            <h1 className="title">Teac小站</h1>
            <p className="summary">分享技术&nbsp;&nbsp;记录成长</p>
            <div className="linkBox">
              <Link to="/todo" className="link">关于我 &gt;</Link>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="contentContainer">
            {
              article.length > 0
                ? <Topics topics={article} />
                : <span>加载中···</span>
            }
          </div>
        </div>
        <Route path={`${path}/:id`} render={({ match: { params: { id } } }) => <TopicDetail id={id} />} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  article: state.article,
})


export default connect(mapStateToProps)(Home)
