import styled from 'styled-components'

/**
 * TitleH1
 * @component
 *
 */
const TitleH1 = styled.h1.attrs((props) => {
  const { color, theme } = props
  return {
    style: {
      color: color
        ? theme.COLORS[color.toUpperCase()]
        : theme.COLORS.FOREGROUND,
    },
  }
})`
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ size }) => size || '2.5em'};
  margin: ${({ margin }) => margin || '1em'};
`

/**
 * TitleH2
 * @component
 *
 */
export const TitleH2 = styled.h2.attrs((props) => {
  const { color, theme } = props
  return {
    style: {
      color: color
        ? theme.COLORS[color.toUpperCase()]
        : theme.COLORS.FOREGROUND,
    },
  }
})`
  text-align: ${({ align }) => align || 'center'};
  font-size: ${({ size }) => size || '2em'};
  margin: ${({ margin }) => margin || '1em'};
`

export default TitleH1
