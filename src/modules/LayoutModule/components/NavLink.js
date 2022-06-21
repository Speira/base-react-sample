import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import Link from '~components/Link'

const { STATUS } = constants

/**
 * NavLink.
 * @component
 *
 * @param {} props
 */
function NavLink(props) {
  const { isActive, label, size, to, ...rest } = props
  return (
    <Link status={isActive ? STATUS.INFO : ''} to={to} size={size} {...rest}>
      {label}
    </Link>
  )
}
NavLink.defaultProps = {
  isActive: false,
  size: '',
  to: '',
}
NavLink.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  to: PropTypes.string,
}
export default Link
