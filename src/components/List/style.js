import styled from 'styled-components'

/**
 * BaseList
 * @component
 *
 */
const BaseList = styled.ul`
  width: 100%;
  list-style: ${({ listStyle }) => listStyle || 'none'};
  padding-inline-start: 0;
  &.boxed {
    box-shadow: 4px 4px 5px -5px ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  }
`

export default BaseList
