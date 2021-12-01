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
  box-shadow: -1px 0 4px -2px ${({ theme }) => theme.COLORS.PRIMARY};
  padding: 4px;
  overflow-x: auto;
  &.head {
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }
  &.center {
    justify-content: center;
  }
  &:first-child {
    border-left: none;
  }
`

export default BaseTableRowItem
