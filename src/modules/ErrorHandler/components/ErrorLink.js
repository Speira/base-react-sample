import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '~contexts/ThemeContext'
import Link from '~components/Link'

/**
 * ErrorLink
 * @component
 *
 */
function ErrorLink(props) {
  const { colors } = useTheme()
  const { TERTIARY, BACKGROUND } = colors
  const { children, to, ...rest } = props
  const linkProps = {
    backgroundcolor: TERTIARY,
    color: BACKGROUND,
    size: '0.8em',
    variant: 'box',
  }
  return (
    <Link to={to} {...rest} {...linkProps}>
      {children}
    </Link>
  )
}
ErrorLink.defaultProps = {}
ErrorLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}

export default ErrorLink
