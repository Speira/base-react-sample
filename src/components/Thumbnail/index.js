import React from 'react'
import PropTypes from 'prop-types'
import BaseThumbnail from './style'

/**
 * Thumbnail
 * @component
 *
 */
function Thumbnail(props) {
  return <BaseThumbnail {...props} />
}
Thumbnail.defaultProps = {
  className: '',
}
Thumbnail.propTypes = {
  className: PropTypes.string,
}

export default Thumbnail
