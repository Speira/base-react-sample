import styled from 'styled-components'
import Wrapper from '~components/Wrapper'
import { getStatusColor } from '~utils/functions'

/**
 * BaseButton
 * @component
 *
 */
const BaseButton = styled(Wrapper).attrs((props) => {
  const { status, theme } = props
  const backgroundColor = getStatusColor({ status, theme })
  return {
    tag: 'button',
    type: 'button',
    style: {
      backgroundColor,
      color: theme.COLORS.STATIC.LIGHT,
    },
  }
})`
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 2px -1px ${({ theme }) => theme.COLORS.STATIC.DARK},
    -1px -1px 2px 0px ${({ theme }) => theme.COLORS.STATIC.DARK} inset;
  cursor: pointer;
  position: relative;
  outline: none;
  transition: all 0.05s ease-in-out;
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1em;
  &.rounded {
    border-radius: 100%;
  }
  &.unboxed {
    border: none;
    box-shadow: none;
  }
  &:hover {
  }
  &:active {
    opacity: 0.5;
    transform: scale(0.96);
    transform-origin: bottom center;
    box-shadow: 0px 0px 1px -1px ${({ theme }) => theme.COLORS.STATIC.DARK},
      0px 0px 3px -1px currentcolor inset;
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
    cursor: text;
  }
  &:after {
    content: '';
    background-color: #ffffff33;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    border-radius: 2px;
    top: 0;
    left: 0;
    opacity: 0.5;
    transform: scale(0, 1);
    transform-origin: left;
    transition: none;
    border-radius: 8px;
  }
  &:hover:after {
    transform: scale(1, 1);
    transition: all 0.2s ease-in-out;
  }
  &:active:after {
    transform: scale(0, 1);
  }
  &:disabled:after {
    transform: none;
  }
`

export default BaseButton
