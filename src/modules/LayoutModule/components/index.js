import React from 'react'

import { translate as t } from '~utils/functions'
import constants from '~utils/constants'

import LayoutLink from './LayoutLink'
import LayoutWrapper from './LayoutWrapper'

const { HTML_WRAPPER_TAGS } = constants

/* *********************** LayoutLink ************************* */

export function HomeLink(props) {
  return <LayoutLink {...props} label={t`HOME`} boxed />
}

export function BrandLink(props) {
  return <LayoutLink {...props} label={t`HOME`} size="2em" />
}

export function LoginLink(props) {
  return <LayoutLink {...props} label={`${t`LOGIN`}/${t`SIGNUP`}`} boxed />
}

export function LogoutLink(props) {
  return <LayoutLink {...props} label={t`LOGOUT`} boxed />
}

export function ProfileLink(props) {
  return <LayoutLink {...props} label={t`PROFILE`} boxed />
}

export function NoPageLink(props) {
  return <LayoutLink {...props} label={t`NO_EXISTENT_PAGE`} boxed />
}

/* *********************** LayoutWrapper *************************** */

export function HeaderWrapper(props) {
  return (
    <LayoutWrapper
      secondary
      style={{
        alignItems: 'center',
        boxShadow: '0px 1px 4px -2px',
        display: 'flex',
        height: '72px',
        justifyContent: 'space-between',
        padding: '0 1em',
        xs: {
          height: 'auto',
          minHeight: '72px',
        },
      }}
      {...props}
    />
  )
}

export function BodyWrapper(props) {
  return (
    <LayoutWrapper
      primary
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        width: '100%',
        xs: {
          fontSize: '1.4em',
        },
      }}
      {...props}
    />
  )
}

export function FooterWrapper(props) {
  return (
    <LayoutWrapper
      secondary
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px -1px 4px -2px',
        height: '100px',
        width: '100%',
      }}
      {...props}
    />
  )
}

export function NavWrapper(props) {
  return (
    <LayoutWrapper
      tag={HTML_WRAPPER_TAGS.NAV}
      style={{ display: 'flex' }}
      {...props}
    />
  )
}
