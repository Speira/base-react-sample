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
} from '~AuthModule/components'

const { FIELDS, PATHS, STATUS } = constants
const { PASSWORD, USERNAME } = FIELDS
/**
 * LoginContainer
 * @container
 *
 */
function LoginContainer() {
  const { signin } = useAuth()
  const { clearAlert, HookAlert, setAlert } = useAlert()
  const [isLoading, toggleLoading] = React.useState(false)
  const [inputs, setInputs] = React.useState(new DefaultUser())

  const setUser = (field) => (value) =>
    setInputs((sync) => ({ ...sync, [field]: value }))

  /**
   * authenticateUser
   */
  const authenticateUser = () => {
    const tempUser = new DefaultUser(inputs)
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
        setAlert({ message: t`AUTH_FAILED` })
      })
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
