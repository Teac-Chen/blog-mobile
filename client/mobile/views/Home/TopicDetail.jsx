import React from 'react'
import PropTypes from 'prop-types'

import './TopicDetail.scss'

const TopicDetail = ({ id }) => (
  <div className="topicDetail_wrapper">
    <h1>
      ID:
      {id}
    </h1>
  </div>
)

TopicDetail.propTypes = {
  id: PropTypes.string.isRequired,
}

export default TopicDetail
