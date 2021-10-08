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
 * @see src/components/TableRow
 * @see src/components/TableRowItem
 *
 */
function Table(props) {
  const { children, triggerOffset, ...rest } = props
  const ref = React.useRef(null)
  const { isScrolling } = useScroll({
    trigger: triggerOffset,
    ref,
  })

  return (
    <BaseTable ref={ref} {...rest}>
      {React.Children.map(children, (element) =>
        React.cloneElement(element, {
          isTableScrolling: isScrolling,
        }),
      )}
    </BaseTable>
  )
}
Table.defaultProps = {
  children: undefined,
  className: '',
  height: '',
  triggerOffset: 50,
  width: '',
}
Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.string,
  triggerOffset: PropTypes.number, // The trigger to the scroll behaviors
  width: PropTypes.string,
}

export default Table
