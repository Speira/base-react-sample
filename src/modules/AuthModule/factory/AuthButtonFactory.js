import React from 'react'
import { translate as t } from '~utils/functions'
import constants from '~utils/constants'
import AuthButton from '~AuthModule/components/AuthButton'

const { STATUS } = constants

/* *************** AuthButtonFactory *************** */

export function ValidateButton(props) {
  return <AuthButton {...props} label={t`VALIDATE`} status={STATUS.INFO} />
}

export default AuthButton
