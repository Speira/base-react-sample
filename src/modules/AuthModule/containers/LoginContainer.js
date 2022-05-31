import React from 'react'

import { useAuth } from '~contexts/AuthContext'
import { useAPI } from '~contexts/APIContext'
import useRouter from '~hooks/useRouter'
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
} from '~AuthModule/components'

const { FIELDS, PATHS } = constants
const { PASSWORD, USERNAME } = FIELDS

/**
 * LoginContainer
 * @container
 *
 */
function LoginContainer() {
  const { backToReferer } = useRouter()
  const { isAuthenticated, setAuthUser } = useAuth()
  const { sendRequest } = useAPI()
  const { HookAlert, setAlert } = useAlert()
  const [isLoading, toggleLoading] = React.useState(false)
  const [isConnecting, toggleConnecting] = React.useState(false)
  const [inputs, setInputs] = React.useState(new DefaultUser())

  const setUser = (field) => (value) =>
    setInputs((sync) => ({ ...sync, [field]: value }))

  /**
   * authenticateUser
   */
  const authenticateUser = () => {
    toggleConnecting(true)
    const tempUser = new DefaultUser(inputs)
    const error = tempUser.getError()
    const errors = []
    if (error.username.missing) errors.push(t`USERNAME_MISSING`)
    if (error.password.missing) errors.push(t`PASSWORD_MISSING`)
    if (error.password.length) errors.push(t`PASSWORD_LACKS_CHARACTERS`)
    if (errors.length) return setAlert({ message: errors })
    toggleLoading(true)
    return sendRequest(tempUser)
      .then((data) => {
        setAuthUser(data)
        toggleLoading(false)
        backToReferer()
      })
      .catch(() => {
        toggleLoading(false)
        setAlert({ message: t`AUTH_FAILED` })
      })
  }

  if (isAuthenticated && !isConnecting) {
    backToReferer()
  }
  if (isLoading) {
    return <LoginLoading />
  }
  return (
    <LoginWrapper>
      <HookAlert />
      <SendingForm onKeyPress={handleEnterPress(authenticateUser)}>
        <UsernameInput value={inputs[USERNAME]} onChange={setUser(USERNAME)} />
        <PasswordInput value={inputs[PASSWORD]} onChange={setUser(PASSWORD)} />
        <ValidateButton onClick={authenticateUser} />
      </SendingForm>
      <NoAccountLink to={PATHS.AUTH_SIGNUP} />
    </LoginWrapper>
  )
}

export default LoginContainer
