import React from 'react'
import { translate as t } from '~utils/functions'
import constants from '~utils/constants'

import AuthButton from '~AuthModule/components/AuthButton'
import AuthForm from '~AuthModule/components/AuthForm'
import AuthInput from '~AuthModule/components/AuthInput'
import AuthLink from '~AuthModule/components/AuthLink'
import AuthLoading from '~AuthModule/components/AuthLoading'
import AuthWrapper from '~AuthModule/components/AuthWrapper'

const { STATUS } = constants

/* *********************** AuthButton *************************** */

export function ValidateButton(props) {
  return <AuthButton {...props} label={t`VALIDATE`} status={STATUS.INFO} />
}

/* *********************** AuthInput *************************** */

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

/* *********************** AuthForm *************************** */

export function SendingForm(props) {
  return <AuthForm {...props} />
}

/* *********************** AuthLink *************************** */

export function NoAccountLink(props) {
  return <AuthLink {...props} label={t`ACCOUNT_NO_EXISTING`} />
}
export function ExistingAccountLink(props) {
  return <AuthLink {...props} label={t`ACCOUNT_EXISTING`} />
}

/* *********************** AuthLoading *************************** */

export function LoginLoading(props) {
  return <AuthLoading {...props} label={t`LOGIN_ONGOING`} />
}

export function SignupLoading(props) {
  return <AuthLoading {...props} label={t`SIGNUP_ONGOING`} />
}

/* *********************** AuthWrapper *************************** */

export function LoginWrapper(props) {
  return <AuthWrapper {...props} title={t`LOGIN`} />
}
export function SignupWrapper(props) {
  return <AuthWrapper {...props} title={t`SIGNUP`} />
}
export function RegistrationSentWrapper(props) {
  return <AuthWrapper {...props} title={t`SIGNUP_MAIL_SENT`} />
}
