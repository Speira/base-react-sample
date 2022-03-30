import React from 'react'
import PropTypes from 'prop-types'

import Link from '~components/Link'

/**
 * AuthLink
 * @component
 * @param {String} label
 * @Param {String} to
 *
 */
function AuthLink(props) {
  const { label, to } = props
  return <Link to={to}>{label}</Link>
}
AuthLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default AuthLink
