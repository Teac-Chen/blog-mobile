import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ type }) => <i className={`iconfont icon-${type}`} />

Icon.propTypes = {
  type: PropTypes.string,
}

Icon.defaultProps = {
  type: '',
}

export default Icon
