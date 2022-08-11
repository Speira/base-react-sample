import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledLabel
 * @component
 *
 */
const StyledLabel = styled.label``

/**
 * Label
 * @component
 *
 */
function Label(props) {
  const { children, label, required, ...rest } = props
  return (
    <StyledLabel {...rest}>
      {label && <span>{`${label}${required ? ' (*)' : ''}`}&nbsp;:&nbsp;</span>}
      {children}
    </StyledLabel>
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
