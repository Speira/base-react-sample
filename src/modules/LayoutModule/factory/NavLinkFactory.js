import React from 'react'

import { translate as t } from '~utils/functions'

import NavLink from '~LayoutModule/components/NavLink'

/** ********** NavLinkFactory ********** */
export default NavLink

export function HomeLink(props) {
  return <NavLink {...props} label={t`HOME`} boxed />
}

export function BrandLink(props) {
  return <NavLink {...props} label={t`HOME`} size="2em" />
}

export function LoginLink(props) {
  return <NavLink {...props} label={`${t`LOGIN`}/${t`SIGNUP`}`} boxed />
}

export function LogoutLink(props) {
  return <NavLink {...props} label={t`LOGOUT`} boxed />
}

export function ProfileLink(props) {
  return <NavLink {...props} label={t`PROFILE`} boxed />
}

export function NoPageLink(props) {
  return <NavLink {...props} label={t`NO_EXISTENT_PAGE`} boxed />
}
