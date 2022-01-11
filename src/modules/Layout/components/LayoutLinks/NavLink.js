import React from 'react'
import PropTypes from 'prop-types'
import Link from '~components/Link'

/**
 * NavLink
 * @component
 *
 */
function NavLink(props) {
  const { children, to, active } = props
  const bgStyle = {}
  if (active) bgStyle.tertiary = true
  else bgStyle.secondary = true
  return (
    <Link to={to} {...bgStyle} boxed active={active}>
      {children}
    </Link>
  )
}
NavLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default NavLink
