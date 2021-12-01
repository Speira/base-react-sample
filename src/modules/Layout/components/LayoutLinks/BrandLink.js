import React from 'react'
import PropTypes from 'prop-types'
import Link from '~components/Link'

/**
 * BrandLink
 * @component
 *
 */
function BrandLink(props) {
  const { children, to, ...restProps } = props
  return (
    <Link to={to} size="2em" {...restProps}>
      {children}
    </Link>
  )
}
BrandLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default BrandLink
