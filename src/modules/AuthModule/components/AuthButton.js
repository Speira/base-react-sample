import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'

import Button from '~components/Button'
import Wrapper from '~components/Wrapper'

const { STATUS } = constants

/**
 * AuthButton
 * @component
 *
 */
function AuthButton(props) {
  const { label, onClick, status } = props
  return (
    <Wrapper style={{ textAlign: 'center' }}>
      <Button status={status} onClick={onClick}>
        {label}
      </Button>
    </Wrapper>
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
