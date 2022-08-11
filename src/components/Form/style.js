import styled from 'styled-components'

/**
 * BaseForm
 * @component
 *
 */
const BaseForm = styled.form`
  padding: 1.5em 3%;
  transition: height 1s;
  border-radius: 8px;
  box-shadow: 0px 0px 4px -2px var(--color-dark);
  &.column {
    display: grid;
    grid-template-rows: auto;
    grid-row-gap: 1em;
  }
  &.row {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default BaseForm
