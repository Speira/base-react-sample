import styled from 'styled-components'

/**
 * BaseTable
 * @component
 *
 */
const BaseTable = styled.div`
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  box-shadow: 0 0 12px -3px ${({ theme }) => theme.COLORS.DYNAMIC.TERTIARY} inset;
  display: inline-block;
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || '90%'};
  min-height: ${({ minHeight }) => minHeight || '200px'};
  min-width: ${({ minWidth }) => minWidth || 'auto'};
  overflow: hidden auto;
  padding: 0em;
  position: relative;
  @media (min-width: 768px) {
    max-width: '88%';
  }
`

export default BaseTable
