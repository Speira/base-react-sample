import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'
import Link from '~components/Link'

/**
 * LayoutLink.
 * @component
 *
 * @param {} props
 */
function LayoutLink(props) {
  const { to, label } = props
  return (
    <Link to={to} size="2em">
      {label}
    </Link>
  )
}
LayoutLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
export default LayoutLink

export const BrandLink = (props) => <LayoutLink {...props} label={t`HOME`} />
