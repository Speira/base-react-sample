import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'

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

export const NoAccountLink = (props) => (
  <AuthLink {...props} label={t`ACCOUNT_NO_EXISTING`} />
)
export const ExistingAccountLink = (props) => (
  <AuthLink {...props} label={t`ACCOUNT_EXISTING`} />
)
