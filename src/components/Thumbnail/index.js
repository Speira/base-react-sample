import React from 'react'
import PropTypes from 'prop-types'
import BaseThumbnail from './style'

/**
 * Thumbnail
 * @component
 *
 */
function Thumbnail(props) {
  const { children, ...rest } = props

  return <BaseThumbnail {...rest}>{children}</BaseThumbnail>
}
Thumbnail.defaultProps = {
  children: undefined,
  className: '',
}
Thumbnail.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Thumbnail
