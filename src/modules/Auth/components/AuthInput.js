import React from 'react'
import PropTypes from 'prop-types'

import Input from '~components/Input'
import Label from '~components/Label'

/**
 * AuthInput
 * @component
 *
 */
function AuthInput(props) {
  const { label, ...rest } = props
  return (
    <Label>
      <span>{label}:&nbsp;</span>
      <Input {...rest} />
    </Label>
  )
}
AuthInput.defaultProps = {}
AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
}

export default AuthInput

export const UsernameInput = (props) => (
  <AuthInput label="username" placeholder="username" {...props} />
)

export const PasswordInput = (props) => (
  <AuthInput
    label="password"
    placeholder="password"
    type="password"
    {...props}
  />
)
