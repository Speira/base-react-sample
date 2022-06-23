import React from 'react'
import PropTypes from 'prop-types'
import BaseImage from './style'

/**
 * Image
 * @component
 *
 */
function Image(props) {
  const { ...rest } = props

  return <BaseImage {...rest} />
}
Image.defaultProps = {
  className: '',
}
Image.propTypes = {
  className: PropTypes.string,
}

export default Image
