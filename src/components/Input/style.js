import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'
import constants from '~utils/constants'

const {
  STATUS: { WARNING, DANGER },
} = constants

/**
 * BaseInput
 * @component
 *
 */
const BaseInput = styled.input.attrs((props) => {
  const { status, theme } = props
  const statusColor = getStatusColor({ theme, status })
  const style = {}
  if ([DANGER, WARNING].includes(status)) {
    style.outline = `2px solid ${statusColor}`
  }
  return {
    style,
  }
})`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border: none;
  border-radius: 2px;
  margin: auto;
  outline: none;
  position: relative;
  padding: 0.4em;
  transition: all 0.18s ease-in-out;
  width: ${({ width }) => width || 'auto'};
  &:after {
    content: '';
  }
  &:focus:after {
  }
  &:hover {
  }
  &:focus {
    box-shadow: 0 0 4px 0px ${({ theme }) => theme.COLORS.PRIMARY};
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
    cursor: text;
  }
  &:disabled:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: none;
    background-color: ${({ theme }) => theme.COLORS.FOREGROUND};
  }
`

export default BaseInput

export const BaseTextarea = styled.textarea.attrs((props) => {
  const { color, theme } = props
  const themeColor = theme.COLORS[color.toUpperCase()]
  return {
    style: {
      border: `1px solid ${themeColor}`,
    },
  }
})`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 4px;
  border: none;
  margin: auto;
  min-height: 4em;
  min-width: 400px;
  padding: 0.8em;
  vertical-align: middle;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px 0px ${({ theme }) => theme.COLORS.PRIMARY};
  }
`
