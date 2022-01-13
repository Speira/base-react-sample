import React from 'react'

import { useAuth } from '~contexts/AuthContext'
import constants from '~utils/constants'
import { translate as t } from '~utils/functions'
import DefaultUser from '~utils/constructors/DefaultUser'
import useAlert from '~hooks/useAlert'

import AuthForm from '~Auth/components/AuthForm'
import AuthLoading from '~Auth/components/AuthLoading'
import { LoginWrapper } from '~Auth/components/WrapperAuth'
import { NoAccountLink } from '~Auth/components/AuthLink'
import { PasswordInput, UsernameInput } from '~Auth/components/AuthInput'
import { ValidateButton } from '~Auth/components/AuthButton'

const { AUTH_SIGNUP } = constants.PATHS

/**
 * LoginContainer
 * @container
 *
 */
function LoginContainer() {
  const { signin } = useAuth()
  const { HookAlert, alertIncorrect } = useAlert()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, toggleLoading] = React.useState(false)
  const createAlert = () => null
  const authenticateUser = () => {
    const tempUser = new DefaultUser({
      username,
      password,
    })
    const authErrors = tempUser.getErrors()
    if (authErrors.length) {
      const alert = createAlert({
        message: authErrors,
        title: t`LOGIN_ERROR`,
      })
      return alert
    }
    toggleLoading(true)
    return signin(tempUser).catch(() => {
      toggleLoading(false)
      alertIncorrect()
    })
  }

  if (isLoading) {
    return <AuthLoading messageLogin />
  }
  return (
    <LoginWrapper>
      <HookAlert />
      <AuthForm>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <ValidateButton onClick={authenticateUser} />
      </AuthForm>
      <NoAccountLink to={AUTH_SIGNUP} />
    </LoginWrapper>
  )
}

export default LoginContainer
