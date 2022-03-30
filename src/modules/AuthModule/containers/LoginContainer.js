import React from 'react'

import { useAuth } from '~contexts/AuthContext'
import constants from '~utils/constants'
import { DefaultUser, translate as t, handleEnterPress } from '~utils/functions'
import useAlert from '~hooks/useAlert'

import {
  LoginLoading,
  LoginWrapper,
  NoAccountLink,
  PasswordInput,
  SendingForm,
  UsernameInput,
  ValidateButton,
} from '~AuthModule/builders'

const { PATHS, STATUS } = constants

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
      <SendingForm onKeyPress={handleEnterPress(authenticateUser)}>
        <UsernameInput value={username} onChange={setUsername} />
        <PasswordInput value={password} onChange={setPassword} />
        <ValidateButton onClick={authenticateUser} />
      </SendingForm>
      <NoAccountLink to={PATHS.AUTH_SIGNUP} />
    </LoginWrapper>
  )
}

export default LoginContainer
