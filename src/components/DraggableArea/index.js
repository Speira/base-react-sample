import React from 'react'
import PropTypes from 'prop-types'
import BaseDraggableArea from './style'

/**
 * DraggableArea
 * @component
 *
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
    <BaseDraggableArea
      draggable="true"
      dragging={(isDragging && 1) || 0}
      onClick={syncClick}
      onDragEnd={(e) => handleAction(e, onDragEnd, false)}
      onDragOver={(e) => handleAction(e, onDragOver, true)}
      onDragStart={onDragStart}
      onDrop={(e) => handleAction(e, onDrop, false)}
      {...rest}>
      <span className="placeholder">{placeholder}</span>
      <input
        className="upload"
        ref={uploadRef}
        type="file"
        onChange={(e) => handleAction(e, onDrop, false)}
      />
      {children}
    </BaseDraggableArea>
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
  clickable: PropTypes.bool,
  onDragEnd: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrop: PropTypes.func,
  placeholder: PropTypes.string,
}

export default DraggableArea
