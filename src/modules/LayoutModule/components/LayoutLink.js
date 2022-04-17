import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import Link from '~components/Link'

const { STATUS } = constants

/**
 * LayoutLink.
 * @component
 *
 * @param {} props
 */
function LayoutLink(props) {
  const { isActive, label, size, to, ...rest } = props
  return (
    <Link
      secondary
      status={isActive ? STATUS.INFO : ''}
      to={to}
      size={size}
      {...rest}>
      {label}
    </Link>
  )
}
LayoutLink.defaultProps = {
  isActive: false,
  size: '',
  to: '',
}
LayoutLink.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string.isRequired,
  size: PropTypes.string,
  to: PropTypes.string,
}
export default LayoutLink
