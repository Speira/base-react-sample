import styled from 'styled-components'

/**
 * StyledTableRowItem
 * @component
 *
 */
const StyledTableRowItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: -1px 0 4px -2px var(--color-dark);
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

export default StyledTableRowItem
