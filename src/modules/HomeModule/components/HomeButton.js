import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'

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
  status: PropTypes.oneOf(Object.values(STATUS)).isRequired,
}

export default HomeButton
