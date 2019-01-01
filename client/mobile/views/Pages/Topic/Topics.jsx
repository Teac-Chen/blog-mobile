import React from 'react'
import PropTypes from 'prop-types'

import './Topics.scss'

import TopicItem from './TopicItem'

const Topics = ({ topics, path }) => (
  <div className="topicContainer">
    {topics.map(topic => <TopicItem key={topic.id} path={path} {...topic} />)}
  </div>
)

Topics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
}

export default Topics
