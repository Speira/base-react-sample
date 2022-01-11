import React from 'react'
import { useAuth } from '~contexts/AuthContext'
import constants from '~/utils/constants'
import useRouter from '~hooks/useRouter'

import { HeaderWrapper } from '~Layout/components/LayoutWrappers'
import { BrandLink, NavLink } from '~Layout/components/LayoutLinks'

const { PATHS } = constants

/**
 * HeaderContainer
 * @component
 *
 */
function HeaderContainer() {
  const { pathname } = useRouter()
  const { isAuthenticated, logout } = useAuth()
  const disconnect = (e) => {
    e.preventDefault()
    logout()
  }
  return (
    <HeaderWrapper>
      <BrandLink to={PATHS.DEFAULT}>Brand</BrandLink>
      <a href="https://base-react-style.speira.me/" target="blank">
        You can see all styles availables on this website here ! &#x2197;
      </a>
      <nav>
        <NavLink to={PATHS.DEFAULT} active={pathname === PATHS.DEFAULT}>
          Home
        </NavLink>
        {isAuthenticated ? (
          <NavLink
            to=""
            onClick={disconnect}
            active={pathname === PATHS.AUTH_SIGNUP}>
            Logout
          </NavLink>
        ) : (
          <NavLink to={PATHS.AUTH} active={pathname.startsWith(PATHS.AUTH)}>
            Login/Signup
          </NavLink>
        )}
        {isAuthenticated && (
          <NavLink
            to={PATHS.AUTH_PROFILE}
            active={pathname === PATHS.AUTH_PROFILE}>
            Profile
          </NavLink>
        )}
        <NavLink to="/a-no-exist-url" active={pathname === '/a-no-exist-url'}>
          No existent page
        </NavLink>
      </nav>
    </HeaderWrapper>
  )
}

export default HeaderContainer
