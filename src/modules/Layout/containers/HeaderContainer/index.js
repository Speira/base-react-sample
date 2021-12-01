import React from 'react'

import { useAuth } from '~contexts/AuthContext'
import useRouter from '~hooks/useRouter'
import constants from '~/utils/constants'

import { HeaderWrapper } from '~Layout/components/LayoutWrappers'
import { BrandLink, NavLink } from '~Layout/components/LayoutLinks'

const { PATHS } = constants

/**
 * HeaderContainer
 * @component
 *
 */
function HeaderContainer() {
  const { pathname: path } = document.location
  const { isAuthenticated, logout } = useAuth()
  const { push } = useRouter()
  const disconnect = (e) => {
    e.preventDefault()
    logout().then(() => {
      push(PATHS.DEFAULT)
    })
  }
  return (
    <HeaderWrapper>
      <BrandLink to={PATHS.DEFAULT}>Brand</BrandLink>
      <a href="https://base-react-style.speira.me/" target="blank">
        You can see all styles availables on this website here ! &#x2197;
      </a>
      <nav>
        <NavLink to={PATHS.DEFAULT} active={path === PATHS.DEFAULT}>
          Home
        </NavLink>
        {isAuthenticated ? (
          <NavLink to="" onClick={disconnect} active={path === PATHS.AUTH}>
            Logout
          </NavLink>
        ) : (
          <NavLink to={PATHS.AUTH} active={path === PATHS.AUTH}>
            Login
          </NavLink>
        )}
        {isAuthenticated && (
          <NavLink to={PATHS.AUTH_PROFILE} active={path === PATHS.AUTH_PROFILE}>
            Profile
          </NavLink>
        )}
        <NavLink to="/a-no-exist-url" active={path === '/a-no-exist-url'}>
          No existent page
        </NavLink>
      </nav>
    </HeaderWrapper>
  )
}

export default HeaderContainer
