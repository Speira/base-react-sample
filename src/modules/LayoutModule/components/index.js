import React from 'react'

import { translate as t } from '~utils/functions'
import constants from '~utils/constants'

import LayoutLink from './LayoutLink'
import LayoutWrapper from './LayoutWrapper'

const { HTML_WRAPPER_TAGS } = constants

/* *********************** LayoutLink ************************* */

export const HomeLink = (props) => (
  <LayoutLink {...props} label={t`HOME`} boxed />
)

export const BrandLink = (props) => (
  <LayoutLink {...props} label={t`HOME`} size="2em" />
)

export const LoginLink = (props) => (
  <LayoutLink {...props} label={`${t`LOGIN`}/${t`SIGNUP`}`} boxed />
)

export const LogoutLink = (props) => (
  <LayoutLink {...props} label={t`LOGOUT`} boxed />
)

export const ProfileLink = (props) => (
  <LayoutLink {...props} label={t`PROFILE`} boxed />
)

export const NoPageLink = (props) => (
  <LayoutLink {...props} label={t`NO_EXISTENT_PAGE`} boxed />
)

/* *********************** LayoutWrapper *************************** */

export const HeaderWrapper = (props) => (
  <LayoutWrapper
    style={{
      alignItems: 'center',
      display: 'flex',
      height: '72px',
      justifyContent: 'space-between',
      padding: '0 1em',
    }}
    {...props}
  />
)

export const BodyWrapper = (props) => (
  <LayoutWrapper
    primary
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100vh',
      width: '100%',
      xs: {
        justifyContent: 'space-around',
      },
    }}
    {...props}
  />
)

export const FooterWrapper = (props) => (
  <LayoutWrapper
    secondary
    style={{ height: '100px', width: '100%' }}
    {...props}
  />
)

export const NavWrapper = (props) => (
  <LayoutWrapper tag={HTML_WRAPPER_TAGS.NAV} {...props} />
)
