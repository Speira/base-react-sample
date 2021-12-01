import React from 'react'
import PropTypes from 'prop-types'
import BaseImage from './style'

/**
 * Image
 * @component
 *
 */
function Image(props) {
  const { children, ...rest } = props

  return <BaseImage {...rest}>{children}</BaseImage>
}
Image.defaultProps = {
  children: undefined,
  className: '',
}
Image.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Image
