import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import MarkDown from 'react-markdown'
import HtmlToReact from 'html-to-react/lib/parser'

import Icon from '@m/components/Icon'
// import CodeBlock from './components/CodeBlock'
// import Image from './components/Image'

import { getArticle } from './action'

import './TopicDetail.scss'

class TopicDetail extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    cur: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = { showCatelog: true }
  }

  componentDidMount() {
    const { id, dispatch } = this.props

    getArticle(dispatch, id)

    window.document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.document.body.style = ''
  }

  toggleCatelog(preState) {
    this.setState({ showCatelog: !preState })
  }

  render() {
    const { id, cur } = this.props
    const { showCatelog } = this.state
    const htmlToReact = new HtmlToReact()
    return (
      <div className="topicDetail_wrapper">
        <aside className={`topicDetail_catelog ${showCatelog ? 'active' : ''}`}>目录</aside>
        <section className="topicDetail_content">
          <header className="topicDetail_header">
            <button type="button" className="catelogBtn" onClick={() => this.toggleCatelog(showCatelog)}>
              <Icon type="github1" />
            </button>
            <h1 className="topicDetail_title">{id}</h1>
            <Link to="/topic" className="back">
              <Icon type="github" />
            </Link>
          </header>
          <article className="topicDetail_article">
            <div>
              {htmlToReact.parse(cur)}
            </div>
          </article>
        </section>
      </div>
    )
  }
}

export default connect(state => ({
  cur: state.article.cur,
}))(TopicDetail)
