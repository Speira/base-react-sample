import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledDraggableArea
 * @component
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

/**
 * DraggableArea
 * @component
 * @desc ::  Upload a file in the component
 */
function DraggableArea(props) {
  const {
    children,
    clickable,
    onDragEnd,
    onDragOver,
    onDragStart,
    onDrop,
    placeholder,
    ...rest
  } = props
  const uploadRef = React.useRef(null)
  const [isDragging, toggleIsDragging] = React.useState(false)
  const syncClick = (e) => clickable && uploadRef.current.click(e)
  const handleAction = (e, callback, onGoing) => {
    e.preventDefault()
    e.stopPropagation()
    if (!onGoing || onGoing !== isDragging) {
      toggleIsDragging(onGoing)
      const { files } = e.dataTransfer || e.target
      callback(files)
    }
  }
  return (
    <StyledDraggableArea
      {...rest}
      className={`bg-light ${isDragging && 'dragging'}`}
      draggable="true"
      dragging={(isDragging && 1) || 0}
      onClick={syncClick}
      onDragEnd={(e) => handleAction(e, onDragEnd, false)}
      onDragOver={(e) => handleAction(e, onDragOver, true)}
      onDragStart={onDragStart}
      onDrop={(e) => handleAction(e, onDrop, false)}>
      <span className="placeholder">{placeholder}</span>
      <input
        className="upload"
        ref={uploadRef}
        type="file"
        onChange={(e) => handleAction(e, onDrop, false)}
      />
      {children}
    </StyledDraggableArea>
  )
}
DraggableArea.defaultProps = {
  children: undefined,
  className: '',
  clickable: false,
  onDragEnd: () => {},
  onDragOver: () => {},
  onDragStart: () => {},
  onDrop: () => {},
  placeholder: '',
}
DraggableArea.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  /** When true we can click to add file in it */
  clickable: PropTypes.bool,
  onDragEnd: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  placeholder: PropTypes.string,
}

export default DraggableArea
