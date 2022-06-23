import styled from 'styled-components'
import Wrapper from '~components/Wrapper'

/**
 * BaseDraggableArea
 * @component
 *
 */
const BaseDraggableArea = styled(Wrapper).attrs((props) => {
  const { dragging, style: initialStyle = {}, theme } = props
  const style = { ...initialStyle }
  if (dragging) style.outline = `2px solid ${theme.COLORS.STATIC.DARK}`
  return {
    tag: 'div',
    style,
  }
})`
  width: auto;
  padding: 1em 2em;
  cursor: move;
  background-color: ${({ theme }) => theme.COLORS.STATIC.LIGHT};
  box-shadow: 0 0 2px -1px ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
  border: 1px solid ${({ theme }) => theme.COLORS.STATIC.PRIMARY};
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
