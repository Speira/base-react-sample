import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import { translate as t } from '~utils/functions'

import Button from '~components/Button'

const { DANGER, SUCCESS } = constants.STATUS

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
  <HomeButton label={t`BUTTON`} status={SUCCESS} {...props} />
)

export const DangerButton = (props) => (
  <HomeButton label={t`BUTTON_DANGER`} status={DANGER} {...props} />
)
