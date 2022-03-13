import React from 'react'
import PropTypes from 'prop-types'
import useScroll from '~hooks/useScroll'
import BaseTable from './style'

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
    <BaseTable
      ref={ref}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      minHeight={minHeight}
      minWidth={minWidth}
      {...rest}>
      {React.Children.map(children, (element) =>
        React.cloneElement(element, {
          columns,
          isTableScrolling: isScrolling,
        }),
      )}
    </BaseTable>
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
