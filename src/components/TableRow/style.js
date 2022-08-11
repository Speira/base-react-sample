import styled from 'styled-components'

/**
 * StyledTableRow
 * @component
 *
 */
const StyledTableRow = styled.div`
  display: grid;
  border-bottom: 1px solid var(--color-secondary);
  min-height: 4em;
  transition: opacity, top,
    background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:nth-child(odd) {
    background-color: var(--color-secondary);
  }
  &.head {
    background-color: transparent;
    border-bottom: 2px solid var(--color-primary);
    z-index: 1;
  }
  &.sticky {
    position: sticky;
    top: 0;
    background-color: var(--color-primary);
    opacity: 0.95;
    box-shadow: 0 0 20px -3px var(--color-dark);
    height: 3em;
  }
`

export default StyledTableRow
