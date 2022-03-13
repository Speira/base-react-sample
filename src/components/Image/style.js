import styled from 'styled-components'

const BaseImage = styled.img`
  width: ${({ width }) => width || 'auto'};
`

export default BaseImage
