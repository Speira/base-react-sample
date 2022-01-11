import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthenticatedRoute } from '~utils/routes'
import constants from '~utils/constants'

import LoginContainer from '~Auth/containers/LoginContainer'
import ProfileContainer from '~Auth/containers/ProfileContainer'
import SignupContainer from '~Auth/containers/SignupContainer'

const { AUTH_LOGIN, AUTH_PROFILE, AUTH_SIGNUP } = constants.PATHS

/**
 * Auth
 * @module
 *
 */
function Auth() {
  return (
    <Switch>
      <Route path={AUTH_LOGIN} component={LoginContainer} />
      <AuthenticatedRoute
        exact
        path={AUTH_PROFILE}
        component={ProfileContainer}
      />
      <Route exact path={AUTH_SIGNUP} component={SignupContainer} />
      <Redirect to={AUTH_LOGIN} />
    </Switch>
  )
}

export default Auth
