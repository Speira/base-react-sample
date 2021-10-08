import styled from 'styled-components'

/**
 * BaseTableRow
 * @component
 *
 */
const BaseTableRow = styled.div.attrs((props) => {
  const { scrolltop, theme } = props
  const attrs = {}
  const { COLORS } = theme
  const headScrollingStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: COLORS.SECONDARY,
    opacity: 0.6,
    boxShadow: `0 0 20px -3px ${COLORS.TERTIARY}`,
  }
  if (scrolltop > 0) attrs.style = { ...headScrollingStyle }
  return attrs
})`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || '1fr'};
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.SECONDARY};
  height: ${({ height }) => height || '4em'};
  transition: opacity, top,
    background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  }
  &.head {
    background-color: transparent;
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.TERTIARY};
  }
`

export default BaseTableRow
