import styled from 'styled-components'
import Wrapper from '~components/Wrapper'

/**
 * BaseForm
 * @component
 *
 */
const BaseForm = styled(Wrapper).attrs(() => {
  return { tag: 'form' }
})`
  width: ${({ width }) => width || 'auto'};
  padding: 1.5em 3%;
  transition: height 1s;
  border-radius: 8px;
  box-shadow: 0px 0px 4px -2px ${({ theme }) => theme.COLORS.STATIC.DARK};
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
