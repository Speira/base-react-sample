import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import BaseFieldset from './style'

const {
  POSITIONS: { CENTER, LEFT, RIGHT },
} = constants

/**
 * Fieldset
 * @component
 *
 */
function Fieldset(props) {
  const { children, position, legend, ...rest } = props

  const styledProps = { ...rest }
  styledProps.className = `${styledProps.className} ${position}`

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
  position: LEFT,
}
Fieldset.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  legend: PropTypes.string,
  position: PropTypes.oneOf([CENTER, LEFT, RIGHT]),
}

export default Fieldset
