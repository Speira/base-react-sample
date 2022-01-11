import React from 'react'
import { useAuth } from '~contexts/AuthContext'
import constants from '~utils/constants'
import { createUser } from '~utils/functions'
import useAlert from '~hooks/useAlert'

import { ValidateButton } from '~Auth/components/AuthButton'
import AuthForm from '~Auth/components/AuthForm'
import { UsernameInput, PasswordInput } from '~Auth/components/AuthInput'
import AuthLoading from '~Auth/components/AuthLoading'
import { ExistingAccountLink } from '~Auth/components/AuthLink'
import {
  RegistrationTitle,
  RegistrationSentTitle,
} from '~Auth/components/AuthTitle'
import WrapperAuth from '~Auth/components/WrapperAuth'

const { AUTH_LOGIN } = constants.PATHS
const { USERNAME, PASSWORD } = constants.FIELDS

/**
 * SignupContainer
 * @container
 *
 */
function SignupContainer() {
  const { signup } = useAuth()
  const { HookAlert, alertIncorrect, alertMissing, clearAlert } = useAlert()
  const [tempUser, setTempUser] = React.useState(createUser())
  const [isLoading, toggleLoading] = React.useState(false)
  const [isRegistered, toggleRegistered] = React.useState(false)
  const setValue = (field, value) => {
    setTempUser(createUser({ ...tempUser, [field]: value }))
  }
  const signUp = () => {
    if (Object.values(tempUser).some((v) => v === '')) {
      return alertMissing
    }
    toggleLoading(true)
    return signup(tempUser)
      .then(() => {
        clearAlert()
        toggleLoading(false)
        toggleRegistered(true)
      })
      .catch(() => {
        toggleLoading(false)
        alertIncorrect()
      })
  }
  if (isLoading) {
    return <AuthLoading messageSignup />
  }
  if (isRegistered) {
    return (
      <WrapperAuth>
        <RegistrationSentTitle />
        <div>
          An email will be sent to <i>{tempUser.username}</i> containing
          instructions which will allow you to finalize your registration.
        </div>
      </WrapperAuth>
    )
  }
  return (
    <WrapperAuth>
      <RegistrationTitle />
      <HookAlert />
      <AuthForm>
        <UsernameInput
          value={tempUser[USERNAME]}
          onChange={(nextValue) => setValue(USERNAME, nextValue)}
        />
        <PasswordInput
          value={tempUser[PASSWORD]}
          onChange={(nextValue) => setValue(PASSWORD, nextValue)}
        />
        <ValidateButton onClick={signUp} />
      </AuthForm>
      <ExistingAccountLink to={AUTH_LOGIN} />
    </WrapperAuth>
  )
}

export default SignupContainer
