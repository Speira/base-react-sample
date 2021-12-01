import styled from 'styled-components'

const BaseDraggableArea = styled.div.attrs((props) => {
  const { dragging, theme } = props
  const style = {}
  if (dragging) style.outline = `2px solid ${theme.COLORS.PRIMARY}`
  return {
    style,
  }
})`
  width: auto;
  padding: 1em 2em;
  cursor: move;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  box-shadow: 0 0 2px -1px ${({ theme }) => theme.COLORS.PRIMARY};
  border: 1px solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 4px;
  .placeholder {
    font-style: italic;
    font-size: 0.87em;
  }
  .upload {
    visibility: hidden;
    padding: 0;
  }
`

export default BaseDraggableArea
