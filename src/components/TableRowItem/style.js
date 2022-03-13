import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'

/**
 * BaseTableRowItem
 * @component
 *
 */
const BaseTableRowItem = styled.div.attrs((props) => {
  const { status, theme } = props
  const style = {}
  if (status) {
    const color = getStatusColor({ status, theme, alpha: 0.2 })
    style.backgroundColor = color
  }
  return {
    style,
  }
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: -1px 0 4px -2px ${({ theme }) => theme.COLORS.STATIC.DARK};
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
  &.primary {
    box-shadow: -1px 0 4px -2px ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  }
  &.secondary {
    box-shadow: -1px 0 4px -2px ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  }
  &.tertiary {
    box-shadow: -1px 0 4px -2px ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
  }
  &.quaternary {
    box-shadow: -1px 0 4px -2px ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
  }
`

export default BaseTableRowItem
