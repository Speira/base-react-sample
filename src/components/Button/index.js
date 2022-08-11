import React from 'react'
import PropTypes from 'prop-types'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import StyledButton from './style'

const { STATUS } = constants

/**
 * Button
 * @component
 *
 */
function Button(props) {
  const { children, className: initialClassName, status, ...rest } = props
  return (
    <StyledButton
      className={`${initialClassName} bg-${status} text-light`}
      status={status}
      {...rest}>
      {children}
    </StyledButton>
  )
}
Button.defaultProps = {
  children: undefined,
  className: '',
  disabled: false,
  onClick: () => null,
  status: STATUS.INFO,
  type: 'button',
}
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.string,
}

export default withAsyncErrorHandling(Button)
