import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'
import Wrapper from '~components/Wrapper'

/**
 * BaseTitle
 * @component
 *
 */
const BaseTitle = styled(Wrapper).attrs((props) => {
  const { style = {}, status, theme, type } = props
  if (status) style.color = getStatusColor({ theme, status })
  return {
    tag: type,
    style,
  }
})`
  font-size: ${({ size }) => size || '2.5em'};
  margin: ${({ margin }) => margin || '0 0 0.5em'};
  padding: ${({ padding }) => padding || '0.5em'};
  color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  &.inline {
    display: inline-block;
  }
  &.left {
    text-align: left;
  }
  &.center {
    text-align: center;
  }
  &.right {
    text-align: right;
  }
  &.light {
    color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    text-shadow: 1px 1px 0px ${({ theme }) => theme.COLORS.STATIC.DARK};
  }
`

export default BaseTitle
