import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '~contexts/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'
import constants from '~utils/constants'

const { AUTH_LOGIN } = constants.PATHS
/**
 * AuthorizationContainer
 * @container
 *
 */
function AuthorizationContainer(props) {
  const { children } = props
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={AUTH_LOGIN} state={{ from: location }} replace />
  }
  return children
}
AuthorizationContainer.propTypes = {
  children: PropTypes.node.isRequired,
}
export default AuthorizationContainer
