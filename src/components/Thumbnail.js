import React from 'react'
import styled from 'styled-components'

/**
 * StyledThumbnail
 * @component
 */
const StyledThumbnail = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 150px;
  &:hover {
    box-shadow: 0 0 2px 1px var(--color-dark);
  }
`

/**
 * Thumbnail
 * @component
 */
function Thumbnail(props) {
  return <StyledThumbnail {...props} />
}

export default Thumbnail
