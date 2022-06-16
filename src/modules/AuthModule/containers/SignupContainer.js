import React from 'react'

import useRouter from '~hooks/useRouter'
import { useAuth } from '~contexts/AuthContext'
import { useAPI } from '~contexts/APIContext'
import constants from '~utils/constants'
import { DefaultUser, translate as t } from '~utils/functions'
import useAlert from '~hooks/useAlert'

import { ValidateButton } from '~AuthModule/factory/AuthButtonFactory'
import { SendingForm } from '~AuthModule/factory/AuthFormFactory'
import {
  PasswordInput,
  UsernameInput,
} from '~AuthModule/factory/AuthInputFactory'
import { ExistingAccountLink } from '~AuthModule/factory/AuthLinkFactory'
import { SignupLoading } from '~AuthModule/factory/AuthLoadingFactory'
import {
  RegistrationSentWrapper,
  SignupWrapper,
} from '~AuthModule/factory/AuthWrapperFactory'

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
    return <SignupLoading />
  }
  if (isRegistered) {
    return (
      <RegistrationSentWrapper>
        <div>{t`SIGNUP_MAIL_WILL_BE_SENT`(inputs[USERNAME])}</div>
      </RegistrationSentWrapper>
    )
  }
  if (isAuthenticated) {
    backToReferer()
  }
  return (
    <SignupWrapper>
      <HookAlert />
      <SendingForm>
        <UsernameInput value={inputs[USERNAME]} onChange={setUser(USERNAME)} />
        <PasswordInput value={inputs[PASSWORD]} onChange={setUser(PASSWORD)} />
        <ValidateButton onClick={signUp} />
      </SendingForm>
      <ExistingAccountLink to={PATHS.AUTH_LOGIN} />
    </SignupWrapper>
  )
}

export default SignupContainer
