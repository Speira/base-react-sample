import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'

/**
 * DropdownButton
 * @desc :: The button who is always visible
 * @component
 *
 */
export const DropdownButton = styled.button.attrs((props) => {
  const { status, theme } = props
  const style = {}
  if (status) {
    const color = getStatusColor({ status, theme, alpha: 0.2 })
    style.backgroundColor = color
  }
  return {
    type: 'button',
    style,
  }
})`
  padding: 1em;
  box-shadow: 1px 1px 2px -1px black;
  font-size: 1em;
  border: none;
  cursor: pointer;
  &.primary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  }
  &.secondary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  }
  &.tertiary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
  }
  &.quaternary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
  }
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
  &:focus {
    outline: none;
  }
  .arrow {
    vertical-align: text-bottom;
    font-size: 1em;
    margin-left: 0.4em;
  }
`

/**
 * DropdownContent
 * @desc :: the content containing all the items
 * @component
 *
 */
export const DropdownContent = styled.div.attrs((props) => {
  const { opened } = props
  return {
    style: {
      transform: `scale(1, ${opened ? '1' : '0'})`,
      transition: opened ? 'transform 0.2s ease-out' : 'transform 0.1s ease-in',
    },
  }
})`
  position: absolute;
  margin-top: 1px;
  background-color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  transform-origin: top;
  z-index: 1;
  .item {
    background-color: transparent;
    border: none;
    box-shadow: 0px 1px 1px -1px ${({ theme }) => theme.COLORS.STATIC.DARK};
    color: ${({ theme }) => theme.COLORS.STATIC.DARK};
    cursor: pointer;
    display: block;
    padding: 0.7em 1em;
    font-size: 1em;
    text-decoration: none;
    transition: all 0.18s ease-in-out;
    min-width: 8em;
  }
  .item:hover {
    background-color: ${({ theme }) => theme.COLORS.STATIC.DARK};
  }

  &.primary {
    .item:hover {
      background-color: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
    }
  }
  &.secondary {
    .item:hover {
      background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
    }
  }
  &.tertiary {
    .item:hover {
      background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
    }
  }
  &.quaternary {
    .item:hover {
      background-color: ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
    }
  }
`

/**
 * BaseDropdown
 * @component
 *
 */
const BaseDropdown = styled.div`
  position: relative;
  display: inline-block;
`

export default BaseDropdown
