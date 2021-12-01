import React from 'react'
import PropTypes from 'prop-types'
import BaseTableRow from './style'

/**
 *
 * TableRow
 *
 * @component
 *
 * @desc::
 *   A row in a Table
 *   Adding optional head className and set default grid columns here
 *
 * @see components/Table
 *
 */
function TableRow(props) {
  const {
    children,
    className,
    columns,
    head: isHead,
    isTableScrolling,
    ...rest
  } = props
  const ref = React.useRef(null)
  const [isSticky, setIsSticky] = React.useState(false)

  const styleProps = { ...rest, columns, className }
  if (isHead) styleProps.className = `${className} head`
  if (!columns)
    styleProps.columns = `repeat(${React.Children.count(children)}, 1fr)`

  React.useEffect(() => {
    if (isHead && isSticky !== isTableScrolling) {
      setIsSticky(isTableScrolling)
    }
  }, [isHead, isSticky, isTableScrolling])

  return (
    <BaseTableRow ref={ref} scrolltop={(isSticky && 1) || 0} {...styleProps}>
      {children}
    </BaseTableRow>
  )
}
TableRow.defaultProps = {
  children: undefined,
  className: '',
  columns: '',
  height: '',
  head: false,
  isTableScrolling: false,
}
TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.string,
  isTableScrolling: PropTypes.bool, // provided by src/Table component
  height: PropTypes.string,
  head: PropTypes.bool,
}

export default TableRow
