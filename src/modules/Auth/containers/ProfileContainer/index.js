import React from 'react'
// import PropTypes from 'prop-types';

import { useAuth } from '~contexts/AuthContext'
import useAlert from '~hooks/useAlert'
import DefaultUser from '~utils/constructors/DefaultUser'

import WrapperAuth from '~Auth/components/WrapperAuth'
import AuthButton from '~Auth/components/AuthButton'
import AuthForm from '~Auth/components/AuthForm'
import AuthInput from '~Auth/components/AuthInput'
import AuthTitle from '~Auth/components/AuthTitle'

/**
 * ProfileContainer
 * @component
 *
 */
function ProfileContainer() {
  const { update, user } = useAuth()
  const {
    HookAlert,
    alertIncorrect,
    alertLoading,
    alertMissing,
    clearAlert,
  } = useAlert()
  const [tempUser, setTempUser] = React.useState(user)
  const [isEditMode, toggleEditMode] = React.useState(false)
  const changeMode = () => toggleEditMode(!isEditMode)
  const setValue = (field, value) =>
    setTempUser(new DefaultUser({ ...tempUser, [field]: value }))
  const disabledProps = isEditMode ? {} : { disabled: true }
  const updateUser = () => {
    if (Object.values(tempUser).some((v) => v === '')) {
      return alertMissing()
    }
    alertLoading()
    return update(tempUser)
      .then(() => {
        clearAlert()
      })
      .catch(() => {
        alertIncorrect()
      })
  }
  return (
    <WrapperAuth>
      <div className="row">
        <AuthTitle>Profile</AuthTitle>
      </div>
      <HookAlert />
      <AuthForm>
        <label>
          <span>Username:</span>
          <AuthInput
            value={tempUser.username}
            onChange={(e) => setValue('username', e.target.value)}
            placeholder="username"
            {...disabledProps}
          />
        </label>
        {isEditMode && (
          <label>
            <span>Password:</span>
            <AuthInput
              value={tempUser.password}
              onChange={(e) => setValue('password', e.target.value)}
              type="password"
              placeholder="password"
            />
          </label>
        )}
        <AuthButton className="center" onClick={updateUser} success>
          Validate
        </AuthButton>
      </AuthForm>
      <AuthButton className="center" onClick={changeMode}>
        {isEditMode ? 'Cancel' : 'Edit'}
      </AuthButton>
    </WrapperAuth>
  )
}
ProfileContainer.propTypes = {}

export default ProfileContainer
