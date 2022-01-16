import React from 'react'
import { useAuth } from '~contexts/AuthContext'
import constants from '~/utils/constants'
import useRouter from '~hooks/useRouter'

import { HeaderWrapper } from '~LayoutModule/components/LayoutWrapper'
import { BrandLink } from '~LayoutModule/components/LayoutLink'
import {
  HomeLink,
  LoginLink,
  LogoutLink,
  NoPageLink,
  ProfileLink,
} from '~LayoutModule/components/LayoutNavLink'

const { AUTH, AUTH_PROFILE, AUTH_SIGNUP, DEFAULT } = constants.PATHS

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
      <BrandLink to={DEFAULT} />
      <a href="https://base-react-style.speira.me/" target="blank">
        You can see all styles availables on this website here ! &#x2197;
      </a>
      <nav>
        <HomeLink to={DEFAULT} active={pathname === DEFAULT} />
        {isAuthenticated ? (
          <LogoutLink
            to=""
            onClick={disconnect}
            active={pathname === AUTH_SIGNUP}
          />
        ) : (
          <LoginLink to={AUTH} active={pathname.startsWith(AUTH)} />
        )}
        {isAuthenticated && (
          <ProfileLink to={AUTH_PROFILE} active={pathname === AUTH_PROFILE} />
        )}
        <NoPageLink
          to="/a-no-exist-url"
          active={pathname === '/a-no-exist-url'}
        />
      </nav>
    </HeaderWrapper>
  )
}

export default HeaderContainer
