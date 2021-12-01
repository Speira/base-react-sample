import React from 'react'
import PropTypes from 'prop-types'
import Link from '~components/Link'

/**
 * ErrorLink
 * @component
 *
 */
function ErrorLink(props) {
  const { children, to, ...rest } = props
  return (
    <Link {...rest} to={to} tertiary size="0.8em">
      {children}
    </Link>
  )
}
ErrorLink.defaultProps = {}
ErrorLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default ErrorLink
