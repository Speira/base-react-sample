import styled from 'styled-components'
import Wrapper from '~components/Wrapper'

/**
 * BaseForm
 * @component
 *
 */
const BaseForm = styled(Wrapper)`
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
`

export default BaseForm
