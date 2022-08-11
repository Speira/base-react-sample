import React from 'react'
import { translate as t } from '~utils/functions'
import { useAuth } from '~contexts/AuthContext'
import constants from '~/utils/constants'
import useRouter from '~hooks/useRouter'

import Link from '~components/Link'
import NavBar from '~components/NavBar'

const { PATHS, STATUS } = constants
const { AUTH, AUTH_PROFILE, AUTH_SIGNUP, DEFAULT } = PATHS

/**
 * NavBarContainer
 * @container
 *
 */
export default function NavBarContainer() {
  const { pathname } = useRouter()
  const { isAuthenticated, logout } = useAuth()
  const disconnect = (e) => {
    e.preventDefault()
    logout()
  }
  const getActiveStatus = (uri, isNotExact) => {
    const refStatus = STATUS.INFO
    if (isNotExact) return pathname.startsWith(uri) ? refStatus : ''
    return pathname === uri ? refStatus : ''
  }
  return (
    <NavBar className="bg-secondary">
      <Link to={DEFAULT}>{t`HOME`} </Link>
      <div className="flex">
        <Link boxed to={DEFAULT} status={getActiveStatus(DEFAULT)}>
          {t`HOME`}
        </Link>
        {isAuthenticated ? (
          <Link
            boxed
            status={getActiveStatus(AUTH_SIGNUP)}
            onClick={disconnect}>
            {t`LOGOUT`}
          </Link>
        ) : (
          <Link boxed status={getActiveStatus(AUTH, true)} to={AUTH}>
            {`${t`LOGIN`}/${t`SIGNUP`}`}
          </Link>
        )}
        {isAuthenticated && (
          <Link
            boxed
            status={getActiveStatus(AUTH_PROFILE)}
            to={AUTH_PROFILE}>{t`PROFILE`}</Link>
        )}
        <Link
          boxed
          status={getActiveStatus('/fake-url')}
          to="/fake-url">{t`NO_EXISTENT_PAGE`}</Link>
      </div>
    </NavBar>
  )
}
