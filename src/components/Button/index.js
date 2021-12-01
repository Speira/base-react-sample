import React from 'react'
import PropTypes from 'prop-types'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import BaseButton from './style'

const { STATUS } = constants

/**
 * Button
 * @component
 *
 */
function Button(props) {
  const { children, status, unboxed, active, rounded, ...rest } = props

  const styledProps = { ...rest }
  if (rounded) styledProps.className = `${styledProps.className} rounded`
  if (unboxed) styledProps.className = `${styledProps.className} unboxed`

  return (
    <BaseButton status={status} active={active ? 1 : 0} {...styledProps}>
      {children}
    </BaseButton>
  )
}
Button.defaultProps = {
  active: false,
  children: undefined,
  className: '',
  disabled: false,
  height: '',
  onBlur: () => null,
  onClick: () => null,
  rounded: false,
  status: STATUS.INFO,
  type: 'button',
  unboxed: false,
  width: '',
}
Button.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  height: PropTypes.string,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  rounded: PropTypes.bool,
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.string,
  unboxed: PropTypes.bool,
  width: PropTypes.string,
}

export default withAsyncErrorHandling(Button)
