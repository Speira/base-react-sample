import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import constants from '~utils/constants'
import useScroll from '~hooks/useScroll'

const { MEDIA_QUERIES } = constants

/**
 * StyledTable
 * @component
 *
 */
const StyledTable = styled.div`
  border-radius: 4px;
  border: 2px solid var(--color-primary);
  box-shadow: 0 0 12px -3px var(--color-dark) inset;
  display: inline-block;
  max-height: auto;
  max-width: 90%;
  min-height: 200px;
  min-width: auto;
  overflow: hidden auto;
  padding: 0em;
  position: relative;
  @media (min-width: ${MEDIA_QUERIES.MD}) {
    max-width: '88%';
  }
`

/**
 *
 * Table
 * @component
 *
 * @desc :: used for Tables, must be used with TableRow and TableRowItem
 *
 * @see See src/components/TableRow
 * @see See src/components/TableRowItem
 *
 */
function Table(props) {
  const {
    children,
    columns,
    maxHeight,
    maxWidth,
    minHeight,
    minWidth,
    triggerOffset,
    ...rest
  } = props
  const ref = React.useRef(null)
  const { isScrolling } = useScroll({
    trigger: triggerOffset,
    ref,
  })

  return (
    <StyledTable
      ref={ref}
      style={{
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
      }}
      {...rest}>
      {React.Children.map(children, (element) =>
        React.cloneElement(element, {
          columns,
          isTableScrolling: isScrolling,
        }),
      )}
    </StyledTable>
  )
}
Table.defaultProps = {
  children: undefined,
  className: '',
  columns: '',
  maxHeight: '',
  maxWidth: '',
  minHeight: '',
  minWidth: '',
  triggerOffset: 50,
}
Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  /** The trigger to the scroll behaviors (num) */
  triggerOffset: PropTypes.number,
}

export default Table
