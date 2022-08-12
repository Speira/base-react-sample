import React from 'react'

import { useAuth } from '~contexts/AuthContext'
import { useAPI } from '~contexts/APIContext'
import useRouter from '~hooks/useRouter'
import constants from '~utils/constants'
import { DefaultUser, handleEnterPress } from '~utils/functions'
import { useTranslation } from 'react-i18next'
import useAlert from '~hooks/useAlert'

import Button from '~components/Button'
import Form from '~components/Form'
import InputField from '~components/InputField'
import Link from '~components/Link'
import Loading from '~components/Loading'
import Title from '~components/Title'
import AuthWrapper from './AuthWrapper'

const { FIELDS, PATHS, STATUS } = constants
const { PASSWORD, USERNAME } = FIELDS
const { INFO } = STATUS

/**
 * LoginContainer
 * @container
 *
 */
function LoginContainer() {
  const { t } = useTranslation()
  const { backToReferer } = useRouter()
  const { isAuthenticated, setAuthUser } = useAuth()
  const { sendRequest } = useAPI()
  const { HookAlert, setAlert } = useAlert()
  const [isLoading, toggleLoading] = React.useState(false)
  const [isConnecting, toggleConnecting] = React.useState(false)
  const [inputs, setInputs] = React.useState(new DefaultUser())

  const setUser = (field) => (value) =>
    setInputs((sync) => ({ ...sync, [field]: value }))

  /** * authenticateUser */
  const authenticateUser = () => {
    toggleConnecting(true)
    const tempUser = new DefaultUser(inputs)
    const error = tempUser.getError()
    const errors = []
    if (error.username.missing) errors.push(t`USERNAME_MISSING`)
    if (error.password.missing) errors.push(t`PASSWORD_MISSING`)
    else if (error.password.length) errors.push(t`PASSWORD_LACKS_CHARACTERS`)
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
    <AuthWrapper>
      <Title>{t`LOGIN`}</Title>
      <HookAlert />
      <Form onKeyPress={handleEnterPress(authenticateUser)}>
        <InputField
          label={t`USERNAME`}
          placeholder="example@example.com"
          type="email"
          value={inputs[USERNAME]}
          onChange={setUser(USERNAME)}
        />
        <InputField
          label={t`PASSWORD`}
          placeholder={t`PASSWORD`}
          type="password"
          value={inputs[PASSWORD]}
          onChange={setUser(PASSWORD)}
        />
        <div className="text-center">
          <Button
            onClick={authenticateUser}
            status={INFO}>{t`VALIDATE`}</Button>
        </div>
      </Form>
      <Link to={PATHS.AUTH_SIGNUP}>{t`ACCOUNT_NO_EXISTING`}</Link>
    </AuthWrapper>
  )
}

export default LoginContainer
