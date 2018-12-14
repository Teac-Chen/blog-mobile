import React from 'react'
import PropTypes from 'prop-types'

import './Topics.scss'

import TopicItem from './TopicItem'

const Topics = ({ topics }) => (
  <div className="topicContainer">
    {topics.map(topic => <TopicItem key={topic.id} {...topic} />)}
  </div>
)

Topics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Topics
