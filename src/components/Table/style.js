import styled from 'styled-components'

/**
 * BaseTable
 * @component
 *
 */
const BaseTable = styled.section`
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.COLORS.TERTIARY};
  box-shadow: 0 0 12px -3px ${({ theme }) => theme.COLORS.TERTIARY} inset;
  padding: 0em;
  max-width: 100%;
  display: inline-block;
  max-height: ${({ height }) => height || '300px'};
  min-height: 200px;
  overflow: hidden auto;
  position: relative;
  @media (min-width: 768px) {
    max-width: ${({ width }) => width || '60%'};
    max-height: ${({ height }) => height || '400px'};
  }
`

export default BaseTable
