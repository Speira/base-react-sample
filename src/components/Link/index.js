import React from 'react'
import PropTypes from 'prop-types'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import { adaptBoolProps } from '~utils/functions'
import BaseLink from './style'

/**
 * Link
 * @component
 *
 */
function Link(props) {
  const { boxed, className, href, to, ...rest } = props
  const adaptedParams = adaptBoolProps(rest)
  adaptedParams.className = `${className} ${boxed && 'boxed'}`
  return <BaseLink {...adaptedParams} to={to || href} />
}
Link.defaultProps = {
  active: false,
  boxed: false,
  className: '',
  href: '#',
  primary: false,
  quaternary: false,
  secondary: false,
  tertiary: false,
  size: '',
  to: '',
}
Link.propTypes = {
  active: PropTypes.bool,
  boxed: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  quaternary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  size: PropTypes.string,
  to: PropTypes.string,
}

export default withAsyncErrorHandling(Link)
