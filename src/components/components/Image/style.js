import styled from 'styled-components'
import Wrapper from '~components/Wrapper'

/**
 * BaseImage
 * @component
 *
 */
const BaseImage = styled(Wrapper).attrs(() => {
  return {
    tag: 'img',
  }
})`
  width: ${({ width }) => width || 'auto'};
`

export default BaseImage
