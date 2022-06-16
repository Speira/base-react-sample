import React from 'react'
import constants from '~utils/constants'
import { translate as t } from '~utils/functions'

import SimpleButton from '~HomeModule/components/SimpleButton'

const { STATUS } = constants

/** ********** SimpleButtonFactory ********** */
export default SimpleButton

export function DefaultButton(props) {
  return <SimpleButton label={t`BUTTON`} status={STATUS.INFO} {...props} />
}

export function DangerButton(props) {
  return (
    <SimpleButton label={t`BUTTON_DANGER`} status={STATUS.DANGER} {...props} />
  )
}
