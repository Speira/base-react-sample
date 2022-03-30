import React from 'react'
import { useAuth } from '~contexts/AuthContext'
import constants from '~/utils/constants'
import useRouter from '~hooks/useRouter'

import {
  BrandLink,
  HeaderWrapper,
  HomeLink,
  LoginLink,
  LogoutLink,
  NavWrapper,
  NoPageLink,
  ProfileLink,
} from '~LayoutModule/builders'

const { AUTH, AUTH_PROFILE, AUTH_SIGNUP, DEFAULT } = constants.PATHS

const ExternLink = () => (
  <a href="https://base-react-style.speira.me/" target="blank">
    You can see all styles availables on this website here ! &#x2197;
  </a>
)

/**
 * HeaderContainer
 * @container
 * @desc ::: Header of the whole App
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
      <ExternLink />
      <NavWrapper>
        <HomeLink to={DEFAULT} isActive={pathname === DEFAULT} />
        {isAuthenticated ? (
          <LogoutLink
            isActive={pathname === AUTH_SIGNUP}
            onClick={disconnect}
          />
        ) : (
          <LoginLink isActive={pathname.startsWith(AUTH)} to={AUTH} />
        )}
        {isAuthenticated && (
          <ProfileLink isActive={pathname === AUTH_PROFILE} to={AUTH_PROFILE} />
        )}
        <NoPageLink isActive={pathname === '/fake-url'} to="/fake-url" />
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default HeaderContainer
