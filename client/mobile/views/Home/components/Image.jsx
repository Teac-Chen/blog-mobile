import React from 'react'
import PropTypes from 'prop-types'

function attr2Obj(str) {
  const attrObj = str.split(',')
    .reduce((result, cur) => {
      const [key, value] = cur.split('=')
      if (value) {
        result[key] = value
      }
      return result
    }, {})

  return attrObj
}

const Image = ({ alt, src, title }) => {
  const [imgSrc, attrStr] = src.split('@@')

  let attrs = {}

  if (attrStr) {
    attrs = attr2Obj(attrStr)
  }

  return (
    <img
      alt={alt}
      src={imgSrc}
      title={title}
      {...attrs}
    />
  )
}

Image.defaultProps = {
  alt: undefined,
  title: undefined,
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default Image
