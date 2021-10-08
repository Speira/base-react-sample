import React from 'react'
import PropTypes from 'prop-types'
import Link from '~components/Link'

/**
 * HeaderLink
 * @component
 *
 */
function HeaderLink(props) {
  const { children, isActive, type, to, ...restProps } = props
  const linkProps = {}
  if (type === 'brand') {
    linkProps.size = '2em'
  }
  if (type === 'nav') {
    linkProps.boxactive = isActive
    linkProps.variant = 'box'
  }
  return (
    <Link to={to} {...linkProps} {...restProps}>
      {children}
    </Link>
  )
}
HeaderLink.defaultProps = {
  isActive: false,
  type: '',
}
HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  to: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default HeaderLink
