import styled from 'styled-components'

/**
 * BaseForm
 * @component
 *
 */
const BaseForm = styled.form`
  width: ${({ width }) => width || 'auto'};
  padding: 1.5em 3%;
  transition: height 1s;
  border-radius: 3px;
  box-shadow: 0px 2px 4px -2px ${({ theme }) => theme.COLORS.STATIC.DARK};
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
  &.primary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  }
  &.secondary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  }
  &.tertiary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
  }
  &.quaternary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
  }
`

export default BaseForm
