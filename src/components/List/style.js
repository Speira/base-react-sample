import styled from 'styled-components'

/**
 * BaseList
 * @component
 *
 */
const BaseList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-inline-start: 0;
  &.boxed {
    box-shadow: 4px 4px 5px -5px ${({ theme }) => theme.COLORS.PRIMARY};
  }
`

export default BaseList
