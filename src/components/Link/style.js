import styled from 'styled-components'
import { getStatusColor } from '~utils/functions'
import Wrapper from '~components/Wrapper'

/**
 * BaseLink
 * @component
 *
 */
const BaseLink = styled(Wrapper).attrs((props) => {
  const { className, status, theme } = props
  const attrs = { tag: 'link', style: {} }
  if (className.includes('boxed')) {
    if (status) {
      attrs.style.backgroundColor = getStatusColor({ theme, status })
    }
    attrs.style.color = status
      ? theme.COLORS.STATIC.LIGHT
      : theme.COLORS.STATIC.DARK
    attrs.style.boxShadow = status
      ? `0px 0px 1px 1px ${theme.COLORS.STATIC.DARK} inset`
      : `1px 1px 0px 0px ${theme.COLORS.STATIC.DARK}, 
        -1px 0px 1px 1px${theme.COLORS.STATIC.LIGHT} `
    return attrs
  }
  attrs.style.color = theme.COLORS.STATIC.DARK
  return attrs
})`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  padding: 5px;
  margin: 0 4px;
  font-size: ${({ size }) => size || '1em'};
  text-decoration: underline;
  &:active {
    opacity: 0.5;
  }

  &.boxed {
    font-weight: 600;
    border-radius: 4px;
    box-shadow: 1px 1px 2px -1px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  &.boxed.primary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  }
  &.boxed.secondary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  }
  &.boxed.tertiary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.TERTIARY};
  }
  &.boxed.quaternary {
    background-color: ${({ theme }) => theme.COLORS.STATIC.QUATERNARY};
  }
  @media (min-width: 768px) {
    padding: 8px;
  }
`

export default BaseLink
