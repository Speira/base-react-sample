import React from 'react';
import { withRouter } from 'react-router-dom';
import constants from '~/utils/constants';
import WrapperHeader from '~Layout/components/WrapperHeader';
import HeaderLink from '~Layout/components/HeaderLink';
import { useAuth } from '~contexts/AuthContext';

const { PATHS } = constants;

/**
 * HeaderContainer
 * @component
 *
 */
function HeaderContainer() {
  const { pathname: path } = document.location;
  const { isAuthenticated, logout } = useAuth();
  const disconnect = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <WrapperHeader>
      <HeaderLink to={PATHS.DEFAULT} type="brand">
        Brand
      </HeaderLink>
      <div>
        <HeaderLink
          to={PATHS.DEFAULT}
          type="nav"
          isActive={path === PATHS.DEFAULT}>
          Home
        </HeaderLink>
        {isAuthenticated ? (
          <HeaderLink
            to={PATHS.DEFAULT}
            onClick={disconnect}
            type="nav"
            isActive={path === PATHS.AUTH}>
            Logout
          </HeaderLink>
        ) : (
          <HeaderLink to={PATHS.AUTH} type="nav" isActive={path === PATHS.AUTH}>
            Login
          </HeaderLink>
        )}
        <HeaderLink
          to="/a-no-exist-url"
          type="nav"
          isActive={path === '/a-no-exist-url'}>
          No existent page
        </HeaderLink>
      </div>
    </WrapperHeader>
  );
}

export default withRouter(HeaderContainer);
