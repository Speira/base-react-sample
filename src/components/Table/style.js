import styled from 'styled-components'
import constants from '~utils/constants'

const { MEDIA_QUERIES } = constants

/**
 * StyledTable
 * @component
 *
 */
const StyledTable = styled.div`
  border-radius: 4px;
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 12px -3px var(--color-dark) inset;
  display: inline-block;
  max-height: auto;
  max-width: 90%;
  min-height: 200px;
  min-width: auto;
  overflow: hidden auto;
  padding: 0em;
  position: relative;
  @media (min-width: ${MEDIA_QUERIES.MD}) {
    max-width: '88%';
  }
`

export default StyledTable
