import React from 'react'
import PropTypes from 'prop-types'

import Form from '~components/Form'

/**
 * AuthForm
 * @component
 *
 */
function AuthForm(props) {
  const { children, style, ...rest } = props
  return (
    <Form {...rest} tag="form">
      {children}
    </Form>
  )
}
AuthForm.defaultProps = {
  style: {},
}
AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ),
}

export default AuthForm
