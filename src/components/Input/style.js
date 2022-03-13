import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'
import constants from '~utils/constants'

const { STATUS } = constants

/**
 * BaseInput
 * @component
 *
 */
const BaseInput = styled.input.attrs((props) => {
  const { status, theme } = props
  const style = {}
  if (status) {
    const statusColor = getStatusColor({ theme, status })
    const size = status === STATUS.DANGER ? '2px' : '1px'
    style.outline = `${size} solid ${statusColor}`
  }
  return {
    style,
  }
})`
  background-color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
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
    box-shadow: 0 0 4px 0px ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
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
    background-color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  }
`

export default BaseInput

/**
 * BaseTextarea
 * @component
 *
 */
export const BaseTextarea = styled.textarea.attrs((props) => {
  const { status, theme } = props
  const statusColor = getStatusColor({ theme, status })
  const style = {}
  if (status) style.outline = `1px solid ${statusColor}`
  return {
    style,
  }
})`
  background-color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
  border-radius: 4px;
  border: none;
  margin: auto;
  min-height: 4em;
  min-width: 400px;
  padding: 0.8em;
  vertical-align: middle;
  &:focus {
    outline: none;
    box-shadow: 0 0 4px 0px ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  }
`
