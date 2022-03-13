import styled from 'styled-components'

/**
 * BaseFieldset
 * @component
 *
 */
const BaseFieldset = styled.fieldset`
  width: 100%;
  max-width: 50em;
  border-color: ${({ theme }) => theme.COLORS.STATIC.DARK};
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

export default BaseFieldset
