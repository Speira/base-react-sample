import React from 'react'
import { translate as t } from '~utils/functions'
import AuthLoading from '~AuthModule/components/AuthLoading'

/* ************** AuthLoadingFactory ************** */
export default AuthLoading

export function LoginLoading(props) {
  return <AuthLoading {...props} label={t`LOGIN_ONGOING`} />
}

export function SignupLoading(props) {
  return <AuthLoading {...props} label={t`SIGNUP_ONGOING`} />
}
