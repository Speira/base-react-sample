import React from 'react'
import PropTypes from 'prop-types'
import BaseLabel from './style'

/**
 * Label
 * @component
 *
 */
function Label(props) {
  const { children, label, required, ...rest } = props
  return (
    <BaseLabel {...rest}>
      {label && <span>{`${label}${required ? ' (*)' : ''}`}&nbsp;:&nbsp;</span>}
      {children}
    </BaseLabel>
  )
}
Label.defaultProps = {
  children: undefined,
  className: '',
  required: false,
  label: '',
}
Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  required: PropTypes.bool,
  label: PropTypes.string,
}

export default Label
