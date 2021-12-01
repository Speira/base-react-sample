import React from 'react'
import PropTypes from 'prop-types'
import BaseFieldset from './style'

/**
 * Fieldset
 * @component
 *
 */
function Fieldset(props) {
  const { children, center, right, legend, ...rest } = props

  const styledProps = { ...rest }
  if (center) styledProps.className = `${styledProps.className} center`
  if (right) styledProps.className = `${styledProps.className} right`

  return (
    <BaseFieldset {...styledProps}>
      {legend && <legend>{legend}</legend>}
      {children}
    </BaseFieldset>
  )
}
Fieldset.defaultProps = {
  children: undefined,
  className: '',
  legend: '',
  center: false,
  right: false,
}
Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  legend: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
}

export default Fieldset
