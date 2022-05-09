import React from 'react'
import PropTypes from 'prop-types'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import { getActiveKeys } from '~utils/functions'
import BaseButton from './style'

const { STATUS } = constants

/**
 * Button
 * @component
 *
 */
function Button(props) {
  const {
    children,
    className: initialClassName,
    status,
    rounded,
    unboxed,
    ...rest
  } = props
  const className = `${initialClassName} ${getActiveKeys({ rounded, unboxed })}`
  return (
    <BaseButton className={className} status={status} {...rest}>
      {children}
    </BaseButton>
  )
}
Button.defaultProps = {
  children: undefined,
  className: '',
  disabled: false,
  onClick: () => null,
  rounded: false,
  status: STATUS.INFO,
  type: 'button',
  unboxed: false,
}
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.string,
  unboxed: PropTypes.bool,
}

export default withAsyncErrorHandling(Button)
