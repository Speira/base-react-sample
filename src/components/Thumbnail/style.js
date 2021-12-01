import styled from 'styled-components'

const BaseThumbnail = styled.img`
  border: 1px solid #ddd; /* Gray border */
  border-radius: 4px; /* Rounded border */
  padding: 5px; /* Some padding */
  width: 150px; /* Set a small width */
  &:hover {
    box-shadow: 0 0 2px 1px ${({ theme }) => theme.COLORS.FOREGROUND};
  }
`

export default BaseThumbnail
