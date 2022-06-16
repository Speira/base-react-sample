import React from 'react'
import { translate as t } from '~utils/functions'
import AuthWrapper from '~AuthModule/components/AuthWrapper'

/* *************** AuthWrapperFactory *************** */
export default AuthWrapper

export function LoginWrapper(props) {
  return <AuthWrapper {...props} title={t`LOGIN`} />
}
export function SignupWrapper(props) {
  return <AuthWrapper {...props} title={t`SIGNUP`} />
}
export function RegistrationSentWrapper(props) {
  return <AuthWrapper {...props} title={t`SIGNUP_MAIL_SENT`} />
}
