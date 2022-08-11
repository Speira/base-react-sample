import React from 'react'
import PropTypes from 'prop-types'
import StyledTextarea from './style'

/**
 * Textarea
 * @component
 *
 */
function Textarea(props) {
  const { children, ...rest } = props

  return <StyledTextarea {...rest}>{children}</StyledTextarea>
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
