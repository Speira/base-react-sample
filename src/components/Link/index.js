import React from 'react'
import PropTypes from 'prop-types'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import BaseLink from './style'

const { STATUS } = constants

/**
 * Link
 * @component
 *
 */
function Link(props) {
  const {
    boxed,
    children,
    className: initialClassName,
    href,
    to,
    status,
    ...rest
  } = props

  const hasBG = boxed && status
  const className = `${initialClassName} ${boxed && 'boxed'} ${
    hasBG && `bg-light-${status}`
  }`

  return (
    <BaseLink
      {...rest}
      tag="link"
      status={status}
      className={className}
      to={to || href}>
      {children}
    </BaseLink>
  )
}
Link.defaultProps = {
  boxed: false,
  children: undefined,
  className: '',
  href: '#',
  size: '',
  status: '',
  to: '',
}
Link.propTypes = {
  boxed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  to: PropTypes.string,
}

export default withAsyncErrorHandling(Link)
