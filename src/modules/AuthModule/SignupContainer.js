import React from 'react'

import useRouter from '~hooks/useRouter'
import { useAuth } from '~contexts/AuthContext'
import { useAPI } from '~contexts/APIContext'
import constants from '~utils/constants'
import { DefaultUser } from '~utils/functions'
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
 * SignupContainer
 * @container
 *
 */
function SignupContainer() {
  const { t } = useTranslation()
  const { backToReferer } = useRouter()
  const { isAuthenticated, setAuthUser } = useAuth()
  const { sendRequest } = useAPI()
  const { HookAlert, setAlert, clearAlert } = useAlert()
  const [inputs, setInputs] = React.useState(new DefaultUser())
  const [isLoading, toggleLoading] = React.useState(false)
  const [isRegistered, toggleRegistered] = React.useState(false)

  const setUser = (field) => (value) =>
    setInputs((sync) => ({ ...sync, [field]: value }))

  /**
   * signUp
   */
  const signUp = () => {
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
        setAlert({ message: t`LOGIN_SUCCESS`, status: STATUS.SUCCESS })
        setAuthUser(data)
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
    return <Loading message={t`SIGNUP_ONGOING`} />
  }
  if (isRegistered) {
    return (
      <AuthWrapper>
        <Title>{t`SIGNUP_MAIL_SENT`}</Title>
        <p>{t`SIGNUP_MAIL_WILL_BE_SENT`(inputs[USERNAME])}</p>
      </AuthWrapper>
    )
  }
  if (isAuthenticated) {
    backToReferer()
  }
  return (
    <AuthWrapper>
      <Title>{t`SIGNUP`}</Title>
      <HookAlert />
      <Form>
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
          <Button onClick={signUp} status={INFO}>{t`VALIDATE`}</Button>
        </div>
      </Form>
      <Link to={PATHS.AUTH_LOGIN}>{t`ACCOUNT_EXISTING`}</Link>
    </AuthWrapper>
  )
}

export default SignupContainer
