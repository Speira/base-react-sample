import React from 'react'
import PropTypes from 'prop-types'

import Button from '~components/Button'

/**
 * AuthButton
 * @component
 *
 */
function AuthButton(props) {
  const { success, danger } = props
  let color = 'info'
  if (success) color = 'success'
  if (danger) color = 'danger'
  return <Button color={color} {...props} />
}
AuthButton.defaultProps = {
  success: false,
  danger: false,
}
AuthButton.propTypes = {
  success: PropTypes.bool,
  danger: PropTypes.bool,
}

export default AuthButton
