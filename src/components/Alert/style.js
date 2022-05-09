import styled from 'styled-components'
import Wrapper from '~components/Wrapper'
import { getStatusColor } from '~utils/functions'

/**
 * AlertCloseBtn
 * @component
 *
 */
export const AlertCloseBtn = styled(Wrapper).attrs((props) => {
  const { active, style, theme } = props
  return {
    type: 'button',
    tag: 'button',
    style: {
      ...style,
      cursor: 'pointer',
      float: 'right',
      backgroundColor: 'transparent',
      border: `1px solid ${theme.COLORS.STATIC.LIGHT}`,
      color: 'currentcolor',
      boxShadow: '1px 1px 1px 1px currentcolor',
      borderRadius: '3px',
      realtime: {
        display: active ? 'block' : 'none',
      },
    },
  }
})`
  &:hover {
    opacity: 0.5;
  }
`

/**
 * BaseAlert
 * @component
 *
 */
const BaseAlert = styled(Wrapper).attrs((props) => {
  const { active, status, theme } = props
  const color = getStatusColor({ theme, status })
  const bgColor = getStatusColor({ theme, status, alpha: 0.17 })
  return {
    style: {
      realtime: {
        backgroundColor: bgColor,
        boxShadow: `2px 2px 2px -1px ${color}`,
        color,
        margin: active ? '0.5em 0 1em' : '0em',
        padding: active ? '0.9em' : '0em',
        transform: active ? 'scale(1,1)' : 'scale(1,0)',
      },
    },
  }
})`
  border-radius: 3px;
  text-shadow: 0px 0px 0.5px ${({ theme }) => theme.COLORS.STATIC.LIGHT};
  font-family: arial;
  font-size: 1em;
  font-weight: 600;
  position: relative;
  transition: all 0.3s ease-in-out;
  transform-origin: top;
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
