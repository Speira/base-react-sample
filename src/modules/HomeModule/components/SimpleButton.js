import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'

import Button from '~components/Button'

const { STATUS } = constants

/**
 * SimpleButton
 * @component
 *
 */
function SimpleButton(props) {
  const { status, label, ...rest } = props
  return (
    <Button status={status} {...rest}>
      {label}
    </Button>
  )
}
SimpleButton.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
}

export default SimpleButton
