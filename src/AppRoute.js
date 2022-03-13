import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import { useAuth } from '~contexts/AuthContext'
import { NotAllowedContainer } from '~ErrorModule'
import { checkAccess } from '~utils/functions'

import Loading from '~components/Loading'

/**
 * AppRoute
 * @desc a Route for all the components
 * @return Route component
 *
 */
function AppRoute(props) {
  const { restricted, ...restProps } = props
  const { user, isLoadingAuth } = useAuth()

  if (restricted) {
    const { component: Component, ...restRouteProps } = restProps
    const canAccess = checkAccess({ restricted, user })
    return (
      <Route
        {...restRouteProps}
        render={(renderProps) => {
          if (isLoadingAuth) return <Loading />
          if (canAccess) return <Component {...renderProps} />
          return <NotAllowedContainer />
        }}
      />
    )
  }

  return <Route {...restProps} />
}
AppRoute.defaultProps = {
  restricted: '',
}
AppRoute.propTypes = {
  component: PropTypes.func.isRequired,
  restricted: PropTypes.string,
}

export default AppRoute
