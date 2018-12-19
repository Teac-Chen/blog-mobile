import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Icon from '@m/components/Icon'

import './TopicDetail.scss'

class TopicDetail extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = { showCatelog: true }
  }

  componentDidMount() {
    window.document.body.style.overflow = 'hidden'
  }

  componentWillUnmount() {
    window.document.body.style = ''
  }

  toggleCatelog(preState) {
    this.setState({ showCatelog: !preState })
  }

  render() {
    const { id } = this.props
    const { showCatelog } = this.state
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
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
            这里是内容
            <br />
          </article>
        </section>
      </div>
    )
  }
}

export default TopicDetail
