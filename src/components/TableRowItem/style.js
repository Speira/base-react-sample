import styled from 'styled-components'

/**
 * BaseTableRowItem
 * @component
 *
 */
const BaseTableRowItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 1px solid ${({ theme }) => theme.COLORS.TERTIARY};
  &.head {
    justify-content: center;
    font-weight: bold;
  }
  &:first-child {
    border-left: none;
  }
`

export default BaseTableRowItem
