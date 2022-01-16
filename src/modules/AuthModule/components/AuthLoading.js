import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'
import Loading from '~components/Loading'

/**
 * AuthLoading
 * @component
 *
 */
function AuthLoading(props) {
  const { label, ...rest } = props
  return <Loading message={label} {...rest} />
}

AuthLoading.propTypes = {
  label: PropTypes.string.isRequired,
}

export default AuthLoading

export const LoginLoading = (props) => (
  <AuthLoading {...props} label={t`LOGIN_ONGOING`} />
)

export const SignupLoading = (props) => (
  <AuthLoading {...props} label={t`SIGNUP_ONGOING`} />
)
