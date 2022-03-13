import styled from 'styled-components'

/**
 * BaseTableRow
 * @component
 *
 */
const BaseTableRow = styled.div.attrs((props) => {
  const { scrolltop, theme } = props
  const attrs = {}
  const headScrollingStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.COLORS.STATIC.PRIMARY,
    opacity: 0.95,
    boxShadow: `0 0 20px -3px ${theme.COLORS.STATIC.DARK}`,
    height: '3em',
  }
  if (scrolltop) attrs.style = { ...headScrollingStyle }
  return attrs
})`
  display: grid;
  grid-template-columns: ${({ gridColumns }) => gridColumns || '1fr'};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  min-height: ${({ height }) => height || '4em'};
  transition: opacity, top,
    background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  }
  &.head {
    background-color: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
    z-index: 1;
  }
`

export default BaseTableRow
