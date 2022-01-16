import React from 'react'
import { useAuth } from '~contexts/AuthContext'
import constants from '~utils/constants'
import { translate as t } from '~utils/functions'
import useAlert from '~hooks/useAlert'
import DefaultUser from '~utils/constructors/DefaultUser'

import AuthForm from '~AuthModule/components/AuthForm'
import { ExistingAccountLink } from '~AuthModule/components/AuthLink'
import {
  RegistrationSentWrapper,
  SignupWrapper,
} from '~AuthModule/components/WrapperAuth'
import { SignupLoading } from '~AuthModule/components/AuthLoading'
import { UsernameInput, PasswordInput } from '~AuthModule/components/AuthInput'
import { ValidateButton } from '~AuthModule/components/AuthButton'

const { PATHS, STATUS } = constants
const { AUTH_LOGIN } = PATHS

/**
 * SignupContainer
 * @container
 *
 */
function SignupContainer() {
  const { signup } = useAuth()
  const { HookAlert, setAlert, clearAlert } = useAlert()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, toggleLoading] = React.useState(false)
  const [isRegistered, toggleRegistered] = React.useState(false)
  const signUp = () => {
    const tempUser = new DefaultUser({
      username,
      password,
    })
    const authErrorsList = tempUser.getErrors()
    if (authErrorsList.length) {
      return setAlert({ message: authErrorsList })
    }
    toggleLoading(true)
    return signup(tempUser)
      .then(() => {
        setAlert({ message: t`LOGIN_SUCCESS`, status: STATUS.SUCCESS })
        toggleLoading(false)
        toggleRegistered(true)
        setTimeout(() => clearAlert(), 4000)
      })
      .catch(() => {
        toggleLoading(false)
        setAlert({ message: t`SIGNUP_ERROR` })
      })
  }
  if (isLoading) {
    return <SignupLoading />
  }
  if (isRegistered) {
    return (
      <RegistrationSentWrapper>
        <div>{t`SIGNUP_MAIL_WILL_BE_SENT`(username)}</div>
      </RegistrationSentWrapper>
    )
  }
  return (
    <SignupWrapper>
      <HookAlert />
      <AuthForm>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <ValidateButton onClick={signUp} />
      </AuthForm>
      <ExistingAccountLink to={AUTH_LOGIN} />
    </SignupWrapper>
  )
}

export default SignupContainer
