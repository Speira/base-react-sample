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
  const { status, theme, ...rest } = props
  const style = {}
  if (status) {
    const statusColor = getStatusColor({ theme, status })
    const size = status === STATUS.DANGER ? '2px' : '1px'
    style.outline = `${size} solid ${statusColor}`
  }
  return {
    ...rest,
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

export const BaseTextarea = styled.textarea``
