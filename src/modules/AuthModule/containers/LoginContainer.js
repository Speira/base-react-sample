import React from 'react'

import { useAuth } from '~contexts/AuthContext'
import constants from '~utils/constants'
import { translate as t } from '~utils/functions'
import DefaultUser from '~utils/constructors/DefaultUser'
import useAlert from '~hooks/useAlert'

import AuthForm from '~AuthModule/components/AuthForm'
import { LoginLoading } from '~AuthModule/components/AuthLoading'
import { LoginWrapper } from '~AuthModule/components/WrapperAuth'
import { NoAccountLink } from '~AuthModule/components/AuthLink'
import { PasswordInput, UsernameInput } from '~AuthModule/components/AuthInput'
import { ValidateButton } from '~AuthModule/components/AuthButton'

const { PATHS, STATUS } = constants
const { AUTH_SIGNUP } = PATHS

/**
 * LoginContainer
 * @container
 *
 */
function LoginContainer() {
  const { signin } = useAuth()
  const { clearAlert, HookAlert, setAlert } = useAlert()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [isLoading, toggleLoading] = React.useState(false)

  const authenticateUser = () => {
    const tempUser = new DefaultUser({
      username,
      password,
    })
    const authErrorsList = tempUser.getErrors()
    if (authErrorsList.length) {
      return setAlert({ message: authErrorsList })
    }
    toggleLoading(true)
    return signin(tempUser)
      .then(() => {
        setAlert({ message: t`LOGIN_SUCCESS`, status: STATUS.SUCCESS })
        toggleLoading(false)
        setTimeout(() => clearAlert(), 4000)
      })
      .catch(() => {
        toggleLoading(false)
        setAlert({ message: t`LOGIN_ERROR` })
      })
  }

  if (isLoading) {
    return <LoginLoading />
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
