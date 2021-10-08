import React from 'react'
// import PropTypes from 'prop-types';

import LoginContainer from '~Auth/containers/LoginContainer'
import SignupContainer from '~Auth/containers/SignupContainer'

/**
 * Auth
 * @component
 *
 */
function Auth() {
  const [isLogin, toggleIsLogin] = React.useState(true)
  return isLogin ? (
    <LoginContainer switchAuth={() => toggleIsLogin(false)} />
  ) : (
    <SignupContainer switchAuth={() => toggleIsLogin(true)} />
  )
}
Auth.propTypes = {}

export default Auth
export { default as ProfileContainer } from '~Auth/containers/ProfileContainer'
