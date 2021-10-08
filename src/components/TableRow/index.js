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
  const newProps = { ...rest, children }
  const nbChilds = React.Children.count(children)
  newProps.className = isHead ? `${className} head` : className
  newProps.columns = columns || `repeat(${nbChilds}, 1fr)`

  React.useEffect(() => {
    if (isHead && isSticky !== isTableScrolling) {
      setIsSticky(isTableScrolling)
    }
  }, [isHead, isSticky, isTableScrolling])

  return (
    <BaseTableRow ref={ref} scrolltop={(isSticky && 1) || 0} {...newProps} />
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
