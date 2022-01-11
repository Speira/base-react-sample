import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getThemeColor } from '~utils/functions'

/**
 * BaseLink
 * @component
 *
 */
const BaseLink = styled(Link).attrs((props) => {
  const {
    className,
    active,
    primary,
    quaternary,
    secondary,
    tertiary,
    theme,
  } = props
  if (className.includes('boxed')) {
    const backgroundColor = getThemeColor({
      primary,
      quaternary,
      secondary,
      tertiary,
      theme,
    })
    const color = active ? theme.COLORS.BACKGROUND : theme.COLORS.FOREGROUND
    return {
      style: {
        backgroundColor,
        color,
      },
    }
  }
  return {
    style: { color: theme.COLORS.FOREGROUND, textDecoration: 'underline' },
  }
})`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  padding: 5px;
  margin: 0 4px;
  font-size: ${({ size }) => size || '1em'};
  &:disabled {
    opacity: 0.6;
    cursor: text;
  }
  &.boxed {
    font-weight: 600;
    border-radius: 4px;
    box-shadow: 1px 1px 2px -1px;
  }
  @media (min-width: 768px) {
    padding: 8px;
  }
`

export default BaseLink
