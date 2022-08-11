import styled from 'styled-components'

/**
 * BaseImage
 * @component
 *
 */
const BaseImage = styled.img`
  width: ${({ width }) => width || 'auto'};
`

export default BaseImage
