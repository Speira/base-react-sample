import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'

/**
 * BaseSelect
 * @component
 *
 */
const BaseSelect = styled.select.attrs((props) => {
  const { status, theme } = props
  const color = getStatusColor({ theme, status })
  const style = {}
  if (status) style.border = `1px solid ${color}`
  return {
    style,
  }
})`
  background-color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
  border-radius: 2px;
  cursor: pointer;
  margin: auto;
  outline: none;
  position: relative;
  padding: 0.4em;
  transition: all 0.18s ease-in-out;
  width: ${({ width }) => width || 'auto'};
  font-size: 1em;
  box-shadow: 1px 1px 2px 0px ${({ theme }) => theme.COLORS.STATIC.DARK};
  cursor: pointer;
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

export default BaseSelect
