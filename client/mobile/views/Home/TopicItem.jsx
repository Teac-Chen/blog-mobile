import React from 'react'
import PropTypes from 'prop-types'

import './TopicItem.scss'

const TopicItem = ({
  title,
  summary,
  image,
  read,
  date,
}) => (
  <div className="topicItem">
    <img src={image} alt="" />
    <h5>{title}</h5>
    <p>{summary}</p>
    <div>
      <span>{read}</span>
      <span>{date}</span>
    </div>
  </div>
)

TopicItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  read: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
}

export default TopicItem
