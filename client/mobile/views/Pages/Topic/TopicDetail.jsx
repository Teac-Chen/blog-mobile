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
    path: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      showCatelog: true,
      catelogHover: false,
    }
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

  catelogBtnOver() {
    this.setState({ catelogHover: true })
  }

  catelogBtnOut() {
    this.setState({ catelogHover: false })
  }

  renderCatelogIcon() {
    const { showCatelog, catelogHover } = this.state

    if (!catelogHover) {
      return <Icon type="menu" size="lg" />
    }

    if (showCatelog) {
      return <Icon type="outdent" size="lg" />
    }

    return <Icon type="indent" size="lg" />
  }

  render() {
    const { id, cur, path } = this.props
    const { showCatelog } = this.state
    const htmlToReact = new HtmlToReact()
    return (
      <div className="topicDetail_wrapper">
        <aside className={`topicDetail_catelog ${showCatelog ? 'active' : ''}`}>目录</aside>
        <section className="topicDetail_content">
          <header className="topicDetail_header">
            <button
              type="button"
              className="catelogBtn"
              onClick={() => this.toggleCatelog(showCatelog)}
              onMouseOver={() => this.catelogBtnOver()}
              onMouseOut={() => this.catelogBtnOut()}
              onFocus={() => {}}
              onBlur={() => {}}
            >
              {this.renderCatelogIcon()}
            </button>
            <h1 className="topicDetail_title">{id}</h1>
            <Link to={path} className="back">
              <Icon type="close" size="lg" />
            </Link>
          </header>
          <article className="topicDetail_article">
            <div className="topicDetail_container">
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
