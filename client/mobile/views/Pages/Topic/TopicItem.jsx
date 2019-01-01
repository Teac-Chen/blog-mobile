import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './TopicItem.scss'

const TopicItem = ({
  id,
  title,
  summary,
  image,
  read,
  date,
  path,
}) => (
  <Link className="topicItem" to={`${path}/${id}`}>
    <img src={image} alt="" />
    <h5>{title}</h5>
    <p>{summary}</p>
    <div>
      <span>{read}</span>
      <span>{date}</span>
    </div>
  </Link>
)

TopicItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  read: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default TopicItem
