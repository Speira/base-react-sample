import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getThemeColor } from '~utils/functions'

/**
 * BaseLink
 * @component
 *
 */
const BaseLink = styled(Link).attrs((props) => {
  const { primary, quaternary, secondary, tertiary, theme } = props
  const themeColor = getThemeColor({
    primary,
    quaternary,
    secondary,
    tertiary,
    theme,
  })
  const style = {}
  if (themeColor) {
    style.backgroundColor = themeColor
  }
  return { style }
})`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  padding: 5px;
  margin: 0 4px;
  color: ${({ theme }) => theme.COLORS.FOREGROUND};
  font-size: ${({ size }) => size || '1em'};
  &:disabled {
    opacity: 0.6;
    cursor: text;
  }
  &.boxed {
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.FOREGROUND};
    background-color: ${({ theme }) => theme.COLORS.QUATERNARY};
    border-radius: 4px;
    box-shadow: 1px 1px 2px -1px;
  }
  @media (min-width: 768px) {
    padding: 8px;
  }
`

export default BaseLink
