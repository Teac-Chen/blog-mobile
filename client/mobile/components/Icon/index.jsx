import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ type, size }) => <i className={`iconfont icon-${type} icon-${size}`} />

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'md', 'lg']),
}

Icon.defaultProps = {
  size: 'md',
}

export default Icon
