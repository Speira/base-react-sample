import styled from 'styled-components'

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

export default StyledFieldset
