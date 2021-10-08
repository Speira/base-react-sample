import React from 'react'
import PropTypes from 'prop-types'
import BaseForm from './style'

/**
 * Form
 * @component
 *
 */
function Form(props) {
  const { children, ...rest } = props

  return <BaseForm {...rest}>{children}</BaseForm>
}
Form.defaultProps = {
  children: undefined,
  className: '',
}
Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Form
