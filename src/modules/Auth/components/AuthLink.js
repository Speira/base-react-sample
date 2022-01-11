import React from 'react'
import PropTypes from 'prop-types'
import { withI18NWords } from '~contexts/I18NContext'

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

export const NoAccountLink = withI18NWords(({ words, ...props }) => (
  <AuthLink {...props} label={words.ACCOUNT_NO_EXISTING} />
))
export const ExistingAccountLink = withI18NWords(({ words, ...props }) => (
  <AuthLink {...props} label={words.ACCOUNT_EXISTING} />
))
