import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { getActiveKeys } from '~utils/functions'

/**
 * StyledFieldset
 * @component
 *
 */
const StyledFieldset = styled.fieldset`
  width: 100%;
  max-width: 50em;
  border-color: var(--color-dark);
  border-width: 0.5px;
  padding: 0.7em;
  &.left legend {
    text-align: left;
  }
  &.center legend {
    text-align: center;
  }
  &.right legend {
    text-align: right;
  }
  &.row .fieldset-content {
    display: flex;
    grid-column-gap: 0.7em;
  }
  &.column .fieldset-content {
    display: inline-grid;
    grid-template-rows: auto;
    grid-row-gap: 0.7em;
    text-align: right;
  }
`

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
    <StyledFieldset className={className} {...rest}>
      {legend && <legend>{legend}</legend>}
      <div className="fieldset-content">{children}</div>
    </StyledFieldset>
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
