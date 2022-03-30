import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import { translate as t } from '~utils/functions'

import Button from '~components/Button'

const { STATUS } = constants

/**
 * HomeButton
 * @component
 *
 */
function HomeButton(props) {
  const { status, label, ...rest } = props
  return (
    <Button status={status} {...rest}>
      {label}
    </Button>
  )
}
HomeButton.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default HomeButton

export const DefaultButton = (props) => (
  <HomeButton label={t`BUTTON`} status={STATUS.INFO} {...props} />
)

export const DangerButton = (props) => (
  <HomeButton label={t`BUTTON_DANGER`} status={STATUS.DANGER} {...props} />
)
