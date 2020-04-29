import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { useAuth } from '~contexts/AuthContext';
import { NotAllowed } from '~ErrorHandler';

import Loading from '~components/Loading';

/**
 * AuthenticatedRoute
 * @desc a Route decorator for authenticated needed routes
 * @return Route component
 *
 */
function AuthenticatedRoute(props) {
  const { isAuthenticated, isLoadingAuth } = useAuth();
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(renderProps) => {
        if (isLoadingAuth) return <Loading />;
        if (isAuthenticated) return <Component {...renderProps} />;
        return <NotAllowed />;
      }}
    />
  );
}
AuthenticatedRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AuthenticatedRoute;
