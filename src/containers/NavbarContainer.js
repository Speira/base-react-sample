import React from 'react'
import { useTranslation } from 'react-i18next'
import { useAuth } from '~contexts/AuthContext'
import constants from '~/utils/constants'
import useRouter from '~hooks/useRouter'

import Icons from '~components/Icons'
import Link from '~components/Link'
import NavBar from '~components/NavBar'
import Sidebar from '~components/Sidebar'

const { PATHS, STATUS } = constants
const { AUTH, AUTH_PROFILE, AUTH_SIGNUP, DEFAULT } = PATHS

/**
 * NavBarContainer
 * @container
 *
 */
export default function NavBarContainer() {
  const { t } = useTranslation()
  const { pathname } = useRouter()
  const { isAuthenticated, logout } = useAuth()
  const [isCollapsed, setCollapsedState] = React.useState(false)
  const closeSidebar = () => setCollapsedState(false)
  const disconnect = (e) => {
    e.preventDefault()
    closeSidebar()
    logout()
  }
  const getActiveStatus = (uri, isNotExact) => {
    const refStatus = STATUS.INFO
    if (isNotExact) return pathname.startsWith(uri) ? refStatus : ''
    return pathname === uri ? refStatus : ''
  }
  const internalLinks = (
    <>
      <Link
        boxed
        to={DEFAULT}
        onClick={closeSidebar}
        status={getActiveStatus(DEFAULT)}>
        {t`HOME`}
      </Link>
      {isAuthenticated ? (
        <Link boxed status={getActiveStatus(AUTH_SIGNUP)} onClick={disconnect}>
          {t`LOGOUT`}
        </Link>
      ) : (
        <Link
          boxed
          onClick={closeSidebar}
          status={getActiveStatus(AUTH, true)}
          to={AUTH}>
          {`${t`LOGIN`}/${t`SIGNUP`}`}
        </Link>
      )}
      {isAuthenticated && (
        <Link
          boxed
          onClick={closeSidebar}
          status={getActiveStatus(AUTH_PROFILE)}
          to={AUTH_PROFILE}>{t`PROFILE`}</Link>
      )}
      <Link
        onClick={closeSidebar}
        boxed
        status={getActiveStatus('/fake-url')}
        to="/fake-url">{t`NO_EXISTENT_PAGE`}</Link>
    </>
  )

  return (
    <>
      <NavBar className="bg-secondary">
        <Link to={DEFAULT}>{t`HOME`} </Link>
        <div className="hide-after-xs">
          <Link boxed onClick={() => setCollapsedState(true)}>
            <Icons.Menu style={{ width: '1.5em' }} />
          </Link>
        </div>
        <div className="flex hide-xs">{internalLinks}</div>
      </NavBar>
      <Sidebar isCollapsed={isCollapsed}>
        <div className="sidebar-close-link flex-center padding">
          <Link boxed onClick={closeSidebar}>
            <Icons.Close style={{ width: '1.5em' }} />
          </Link>
        </div>
        <div className="sidebar-nav">{internalLinks}</div>
      </Sidebar>
    </>
  )
}
