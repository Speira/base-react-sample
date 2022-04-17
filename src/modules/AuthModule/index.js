import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import constants from '~utils/constants'
import AppRoute from 'AppRoute'

import LoginContainer from '~AuthModule/containers/LoginContainer'
import SignupContainer from '~AuthModule/containers/SignupContainer'

const { AUTH_LOGIN, AUTH_SIGNUP } = constants.PATHS

/**
 * AuthModule
 * @module
 *
 */
function AuthModule() {
  return (
    <Switch>
      <AppRoute path={AUTH_LOGIN} component={LoginContainer} />
      <AppRoute exact path={AUTH_SIGNUP} component={SignupContainer} />
      <Redirect to={AUTH_LOGIN} />
    </Switch>
  )
}

export default AuthModule
