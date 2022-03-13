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
  const bgColor = getStatusColor({ theme, status, alpha: 0.17 })
  return {
    style: {
      backgroundColor: bgColor,
      boxShadow: `2px 2px 2px -1px ${color}`,
      color,
      height: active ? 'auto' : '0',
      margin: active ? '0.5em 0 1em' : '0',
      padding: active ? '0.9em' : '0',
      transform: active ? 'scale(1,1)' : 'scale(1,0)',
    },
  }
})`
  border-radius: 3px;
  color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  text-shadow: 1px 1px 0px ${({ theme }) => theme.COLORS.STATIC.LIGHT};
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
    border: 1px solid ${({ theme }) => theme.COLORS.STATIC.LIGHT};
    box-shadow: 1px 1px 1px 1px ${({ theme }) => theme.COLORS.STATIC.DARK};
    border-radius: 3px;
  }
  .closebtn:hover {
    opacity: 0.5;
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
