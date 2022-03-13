import React from 'react'
import PropTypes from 'prop-types'
import { getActiveKeys } from '~utils/functions'
import BaseFieldset from './style'

/**
 * Fieldset
 * @component
 *
 */
function Fieldset(props) {
  const {
    children,
    className: initialClassName,
    legend,
    left,
    right,
    column,
    row,
    center,
    ...rest
  } = props

  const className = `${initialClassName} ${getActiveKeys({
    left,
    center,
    right,
    column,
    row,
  })}`
  return (
    <BaseFieldset className={className} {...rest}>
      {legend && <legend>{legend}</legend>}
      <div className="fieldset-content">{children}</div>
    </BaseFieldset>
  )
}
Fieldset.defaultProps = {
  center: false,
  children: undefined,
  className: '',
  column: false,
  left: false,
  legend: '',
  right: false,
  row: false,
}
Fieldset.propTypes = {
  /** text alignement */
  center: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  /** children direction */
  column: PropTypes.bool,
  /** text alignement */
  left: PropTypes.bool,
  legend: PropTypes.string,
  /** text alignement */
  right: PropTypes.bool,
  /** children direction */
  row: PropTypes.bool,
}

export default Fieldset
