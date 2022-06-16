import React from 'react'
import { translate as t } from '~utils/functions'

import AuthLink from '~AuthModule/components/AuthLink'

/* ************** AuthLinkFactory ************** */
export default AuthLink

export function NoAccountLink(props) {
  return <AuthLink {...props} label={t`ACCOUNT_NO_EXISTING`} />
}
export function ExistingAccountLink(props) {
  return <AuthLink {...props} label={t`ACCOUNT_EXISTING`} />
}
