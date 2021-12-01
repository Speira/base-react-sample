import styled from 'styled-components'

/**
 * BaseSelect
 * @component
 *
 */
const BaseSelect = styled.select.attrs((props) => {
  const { color, theme } = props
  const themeColor = theme.COLORS[color.toUpperCase()]
  return {
    style: {
      border: `1px solid ${themeColor}`,
    },
  }
})`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 2px;
  cursor: pointer;
  margin: auto;
  outline: none;
  position: relative;
  padding: 0.4em;
  transition: all 0.18s ease-in-out;
  width: ${({ width }) => width || 'auto'};
`

export default BaseSelect
