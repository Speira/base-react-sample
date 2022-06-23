import React from 'react'
import PropTypes from 'prop-types'
import BaseTextarea from './style'

/**
 * Textarea
 * @component
 *
 */
function Textarea(props) {
  const { children, ...rest } = props

  return <BaseTextarea {...rest}>{children}</BaseTextarea>
}
Textarea.defaultProps = {
  children: undefined,
  className: '',
}
Textarea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Textarea
