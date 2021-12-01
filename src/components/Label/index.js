import React from 'react'
import PropTypes from 'prop-types'
import BaseLabel from './style'

/**
 * Label
 * @component
 *
 */
function Label(props) {
  const { children, ...rest } = props

  return <BaseLabel {...rest}>{children}</BaseLabel>
}
Label.defaultProps = {
  children: undefined,
  className: '',
}
Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Label
