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
  const {
    children,
    className: initialClassName,
    column,
    primary,
    quaternary,
    row,
    secondary,
    tertiary,
    ...rest
  } = props
  const className = `${initialClassName} ${getActiveKeys({
    column,
    primary,
    quaternary,
    row,
    secondary,
    tertiary,
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
  primary: false,
  quaternary: false,
  secondary: false,
  tertiary: false,
}
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  column: PropTypes.bool,
  row: PropTypes.bool,
  /** primary: theme static color (background) */
  primary: PropTypes.bool,
  /** quaternary: theme static color (background) */
  quaternary: PropTypes.bool,
  /** secondary: theme static color (background) */
  secondary: PropTypes.bool,
  /** tertiary: theme static color (background) */
  tertiary: PropTypes.bool,
}

export default Form
