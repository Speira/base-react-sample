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
  font-size: ${({ size }) => size || '2.5em'};
  margin: ${({ margin }) => margin || '0 0 0.5em'};
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
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
  font-size: ${({ size }) => size || '2em'};
  margin: ${({ margin }) => margin || '0.3em 0'};
  .left {
    text-align: left;
  }
  .right {
    text-align: right;
  }
`

export default TitleH1
