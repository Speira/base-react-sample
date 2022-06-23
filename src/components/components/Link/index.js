import React from 'react'
import PropTypes from 'prop-types'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import { getActiveKeys } from '~utils/functions'
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
    className: initialClassName,
    href,
    to,
    primary,
    quaternary,
    secondary,
    status,
    tertiary,
    ...rest
  } = props

  const className = `${initialClassName} ${getActiveKeys({
    boxed,
    primary,
    quaternary,
    secondary,
    tertiary,
  })}`

  return (
    <BaseLink {...rest} status={status} className={className} to={to || href} />
  )
}
Link.defaultProps = {
  boxed: false,
  className: '',
  href: '#',
  primary: false,
  quaternary: false,
  secondary: false,
  tertiary: false,
  size: '',
  status: '',
  to: '',
}
Link.propTypes = {
  boxed: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  quaternary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  size: PropTypes.string,
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  to: PropTypes.string,
}

export default withAsyncErrorHandling(Link)
