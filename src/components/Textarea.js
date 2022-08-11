import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledTextarea
 * @component
 *
 */
const StyledTextarea = styled.textarea`
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 2px -1px var(--color-dark);
  margin: 0 1em;
  min-height: 4em;
  min-width: 400px;
  padding: 0.8em;
  vertical-align: middle;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px 0px;
  }
`

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
