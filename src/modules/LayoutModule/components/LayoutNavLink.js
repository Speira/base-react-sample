import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'
import Link from '~components/Link'

/**
 * LayoutNavLink.
 * @component
 *
 * @param {} props
 */
function LayoutNavLink(props) {
  const { active, label, to, ...rest } = props
  const style = {}
  if (active) style.tertiary = true
  else style.secondary = true
  return (
    <Link to={to} {...style} {...rest} boxed>
      {label}
    </Link>
  )
}
LayoutNavLink.defaultProps = {
  active: false,
  to: '',
}
LayoutNavLink.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default LayoutNavLink

export const HomeLink = (props) => <LayoutNavLink {...props} label={t`HOME`} />

export const LoginLink = (props) => (
  <LayoutNavLink {...props} label={`${t`LOGIN`}/${t`SIGNUP`}`} />
)

export const LogoutLink = (props) => (
  <LayoutNavLink {...props} label={t`LOGOUT`} />
)

export const ProfileLink = (props) => (
  <LayoutNavLink {...props} label={t`PROFILE`} />
)

export const NoPageLink = (props) => (
  <LayoutNavLink {...props} label={t`NO_EXISTENT_PAGE`} />
)
