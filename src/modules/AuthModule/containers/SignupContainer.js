import React from 'react'

import useRouter from '~hooks/useRouter'
import { useAuth } from '~contexts/AuthContext'
import { useAPI } from '~contexts/APIContext'
import constants from '~utils/constants'
import { DefaultUser, translate as t } from '~utils/functions'
import useAlert from '~hooks/useAlert'

import Link from '~components/Link'

import AuthInputs from '~AuthModule/components/AuthInputs'
import AuthWrapper from '~AuthModule/components/AuthWrapper'
import AuthForm from '~AuthModule/components/AuthForm'
import AuthButton from '~AuthModule/components/AuthButton'
import Loading from '~components/Loading'

const { FIELDS, PATHS, STATUS } = constants
const { PASSWORD, USERNAME } = FIELDS

/**
 * SignupContainer
 * @container
 *
 */
function SignupContainer() {
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
      <AuthWrapper title={t`SIGNUP_MAIL_SENT`}>
        <div>{t`SIGNUP_MAIL_WILL_BE_SENT`(inputs[USERNAME])}</div>
      </AuthWrapper>
    )
  }
  if (isAuthenticated) {
    backToReferer()
  }
  return (
    <AuthWrapper title={t`SIGNUP`}>
      <HookAlert />
      <AuthForm>
        <AuthInputs
          password={inputs[PASSWORD]}
          setPassword={setUser(PASSWORD)}
          setUsername={setUser(USERNAME)}
          username={inputs[USERNAME]}
        />
        <AuthButton onClick={signUp} label={t`VALIDATE`} />
      </AuthForm>
      <Link to={PATHS.AUTH_LOGIN}>{t`ACCOUNT_EXISTING`}</Link>
    </AuthWrapper>
  )
}

export default SignupContainer
