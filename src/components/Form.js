import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledForm
 * @component
 *
 */
const StyledForm = styled.form`
  padding: 1.5em 3%;
  transition: height 1s;
  border-radius: 8px;
  box-shadow: 0px 0px 4px -2px var(--color-dark);
`

/**
 * Form
 * @component
 *
 */
function Form(props) {
  const { children, className: initialClassName, column, row, ...rest } = props

  const className = `${initialClassName} 
    ${column && 'grid-auto-rows'}
    ${row && 'flex-center'}
   `
  return (
    <StyledForm {...rest} className={className}>
      {children}
    </StyledForm>
  )
}
Form.defaultProps = {
  children: undefined,
  className: '',
  column: false,
  row: false,
}
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.bool,
  row: PropTypes.bool,
}

export default Form
