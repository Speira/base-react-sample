import React from 'react'

import { useAuth } from '~contexts/AuthContext'
import { useAPI } from '~contexts/APIContext'
import useRouter from '~hooks/useRouter'
import constants from '~utils/constants'
import { DefaultUser, translate as t, handleEnterPress } from '~utils/functions'
import useAlert from '~hooks/useAlert'

import Link from '~components/Link'

import AuthInputs from '~AuthModule/components/AuthInputs'
import AuthWrapper from '~AuthModule/components/AuthWrapper'
import AuthForm from '~AuthModule/components/AuthForm'
import AuthButton from '~AuthModule/components/AuthButton'
import Loading from '~components/Loading'

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
    return <Loading message={t`LOGIN_ONGOING`} />
  }
  return (
    <AuthWrapper title={t`LOGIN`}>
      <HookAlert />
      <AuthForm onKeyPress={handleEnterPress(authenticateUser)}>
        <AuthInputs
          password={inputs[PASSWORD]}
          setPassword={setUser(PASSWORD)}
          setUsername={setUser(USERNAME)}
          username={inputs[USERNAME]}
        />
        <AuthButton onClick={authenticateUser} label={t`VALIDATE`} />
      </AuthForm>
      <Link to={PATHS.AUTH_SIGNUP}>{t`ACCOUNT_NO_EXISTING`}</Link>
    </AuthWrapper>
  )
}

export default LoginContainer
