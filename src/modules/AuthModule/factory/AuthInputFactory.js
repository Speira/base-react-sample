import React from 'react'
import { translate as t } from '~utils/functions'
import AuthInput from '~AuthModule/components/AuthInput'

/* ************* AuthInputs Factory ************* */
export default AuthInput

export function UsernameInput(props) {
  return (
    <AuthInput
      label={t`USERNAME`}
      placeholder="example@example.com"
      type="email"
      {...props}
    />
  )
}

export function PasswordInput(props) {
  return (
    <AuthInput
      label={t`PASSWORD`}
      placeholder={t`PASSWORD`}
      type="password"
      {...props}
    />
  )
}
