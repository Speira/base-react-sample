import styled from 'styled-components'

/**
 * StyledDraggableArea
 * @component
 *
 */
const StyledDraggableArea = styled.div`
  width: auto;
  padding: 1em 2em;
  cursor: move;
  box-shadow: 0 0 2px -1px var(--color-dark);
  border-radius: 4px;
  .placeholder {
    font-style: italic;
    font-size: 0.87em;
  }
  .upload {
    visibility: hidden;
    padding: 0;
  }
  /* Dragging mode on */
  &.dragging {
    outline: 2px solid var(--color-dark);
  }
`

export default StyledDraggableArea
