import React from 'react'
import constants from '~utils/constants'
import { translate as t } from '~utils/functions'

import HomeButton from './HomeButton'

const { STATUS } = constants

/* ************************** HomeButton ********************** */

export function DefaultButton(props) {
  return <HomeButton label={t`BUTTON`} status={STATUS.INFO} {...props} />
}

export function DangerButton(props) {
  return (
    <HomeButton label={t`BUTTON_DANGER`} status={STATUS.DANGER} {...props} />
  )
}

/* ************************** HomeWrapper ********************** */

export { default as HomeWrapper } from './HomeWrapper'
