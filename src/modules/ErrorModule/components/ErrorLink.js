import React from 'react'
import PropTypes from 'prop-types'
import Link from '~components/Link'

/**
 * ErrorLink
 * @component
 *
 */
function ErrorLink(props) {
  const { label, to, ...rest } = props
  return (
    <Link {...rest} to={to} tertiary size="1em">
      {label}
    </Link>
  )
}
ErrorLink.defaultProps = {}
ErrorLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default ErrorLink
