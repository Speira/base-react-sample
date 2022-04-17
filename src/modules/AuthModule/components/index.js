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

export const ValidateButton = (props) => (
  <AuthButton {...props} label={t`VALIDATE`} status={STATUS.INFO} />
)

/* *********************** AuthInput *************************** */

export const UsernameInput = (props) => (
  <AuthInput
    label={t`USERNAME`}
    placeholder="example@example.com"
    type="email"
    {...props}
  />
)

export const PasswordInput = (props) => (
  <AuthInput
    label={t`PASSWORD`}
    placeholder={t`PASSWORD`}
    type="password"
    {...props}
  />
)

/* *********************** AuthForm *************************** */

export const SendingForm = (props) => <AuthForm {...props} />

/* *********************** AuthLink *************************** */

export const NoAccountLink = (props) => (
  <AuthLink {...props} label={t`ACCOUNT_NO_EXISTING`} />
)
export const ExistingAccountLink = (props) => (
  <AuthLink {...props} label={t`ACCOUNT_EXISTING`} />
)

/* *********************** AuthLoading *************************** */

export const LoginLoading = (props) => (
  <AuthLoading {...props} label={t`LOGIN_ONGOING`} />
)

export const SignupLoading = (props) => (
  <AuthLoading {...props} label={t`SIGNUP_ONGOING`} />
)

/* *********************** AuthWrapper *************************** */

export const LoginWrapper = (props) => (
  <AuthWrapper {...props} title={t`LOGIN`} />
)
export const SignupWrapper = (props) => (
  <AuthWrapper {...props} title={t`SIGNUP`} />
)
export const RegistrationSentWrapper = (props) => (
  <AuthWrapper {...props} title={t`SIGNUP_MAIL_SENT`} />
)
