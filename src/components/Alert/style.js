import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'

/**
 * BaseAlert
 * @component
 *
 */
const BaseAlert = styled.div.attrs((props) => {
  const { theme, status, active } = props
  const color = getStatusColor({ theme, status })
  const bgColor = getStatusColor({ theme, status, alpha: 0.2 })
  return {
    style: {
      backgroundColor: bgColor,
      boxShadow: `0 0 3px -1px ${color}`,
      color,
      height: active ? 'auto' : '0',
      margin: active ? '0.5em 0 1em' : '0',
      padding: active ? '0.5em' : '0',
      transform: active ? 'scale(1,1)' : 'scale(1,0)',
    },
  }
})`
  border-radius: 2px;
  color: ${({ theme }) => theme.COLORS.FOREGROUND};
  font-family: arial;
  font-size: 0.9em;
  font-weight: 600;
  position: relative;
  transition: all 0.18s ease-in-out;
  transform-origin: top;
  .closebtn {
    cursor: pointer;
    float: right;
    background-color: transparent;
    border: none;
    outline: none;
  }
  strong {
    display: block;
    margin-bottom: 0.5em;
    font-size: 1.1em;
  }
  ul {
    margin: 0 0 0.1em;
  }
  &:after {
    content: '';
  }
  &:focus:after {
  }
`

export default BaseAlert
