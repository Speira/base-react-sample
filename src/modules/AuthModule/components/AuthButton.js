import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'
import constants from '~utils/constants'

import Button from '~components/Button'

const { STATUS } = constants

/**
 * AuthButton
 * @component
 *
 */
function AuthButton(props) {
  const { label, onClick, status } = props
  return (
    <Button className="center" status={status} onClick={onClick}>
      {label}
    </Button>
  )
}
AuthButton.defaultProps = {
  status: STATUS.INFO,
}
AuthButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOf(Object.values(STATUS)),
}

export default AuthButton

export const ValidateButton = (props) => (
  <AuthButton {...props} label={t`VALIDATE`} status={STATUS.INFO} />
)
