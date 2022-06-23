import React from 'react'
import PropTypes from 'prop-types'
import { getActiveKeys } from '~utils/functions'
import BaseForm from './style'

/**
 * Form
 * @component
 *
 */
function Form(props) {
  const { children, className: initialClassName, column, row, ...rest } = props
  const className = `${initialClassName} ${getActiveKeys({
    column,
    row,
  })}`
  return (
    <BaseForm {...rest} className={className}>
      {children}
    </BaseForm>
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
