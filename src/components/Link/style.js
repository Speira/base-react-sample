import { Link } from 'react-router-dom'
import styled from 'styled-components'

/**
 * BaseLink
 * @component
 *
 */
const BaseLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  padding: 5px;
  margin: 0 4px;
  color: ${({ theme }) => theme.COLORS.FOREGROUND};
  font-size: ${({ size }) => size || '1em'};
  &:disabled {
    opacity: 0.6;
  }
  @media (min-width: 768px) {
    padding: 8px;
  }
`

export default BaseLink

/**
 * BoxedLink
 * @component
 *
 */
export const BoxedLink = styled(BaseLink).attrs(({ active, theme }) => ({
  style: {
    backgroundColor: active ? theme.COLORS.QUATERNARY : theme.COLORS.TERTIARY,
  },
}))`
  font-weight: 600;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 4px;
`
