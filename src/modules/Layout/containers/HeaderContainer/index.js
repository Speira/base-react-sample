import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { useAuth } from '~contexts/AuthContext'
import constants from '~/utils/constants'

import WrapperHeader from '~Layout/components/WrapperHeader'
import HeaderLink from '~Layout/components/HeaderLink'

const { PATHS } = constants

/**
 * HeaderContainer
 * @component
 *
 */
function HeaderContainer(props) {
  const { history } = props
  const { pathname: path } = document.location
  const { isAuthenticated, logout } = useAuth()
  const disconnect = (e) => {
    e.preventDefault()
    logout().then(() => {
      history.push(PATHS.DEFAULT)
    })
  }
  return (
    <WrapperHeader>
      <HeaderLink to={PATHS.DEFAULT} type="brand">
        Brand
      </HeaderLink>
      <a href="https://base-react-style.speira.me/" target="blank">
        You can see all styles availables on this website here ! &#x2197;
      </a>

      <div>
        <HeaderLink
          to={PATHS.DEFAULT}
          type="nav"
          isActive={path === PATHS.DEFAULT}>
          Home
        </HeaderLink>
        {isAuthenticated ? (
          <HeaderLink
            to=""
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
        {isAuthenticated && (
          <HeaderLink
            to={PATHS.AUTH_PROFILE}
            type="nav"
            isActive={path === PATHS.AUTH_PROFILE}>
            Profile
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
  )
}
HeaderContainer.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default withRouter(HeaderContainer)
