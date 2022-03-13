import React from 'react'
import PropTypes from 'prop-types'
import { getActiveKeys } from '~utils/functions'
import BaseTableRow from './style'

/**
 *
 * TableRow
 * @component
 *
 *
 * @desc::  A row in a Table
 *   Adding optional head className and set default grid columns here
 *
 * @see See components/Table
 *
 */
function TableRow(props) {
  const {
    children,
    className: initialClassName,
    columns,
    isHead,
    isTableScrolling,
    ...rest
  } = props
  const [isSticky, setIsSticky] = React.useState(false)

  const className = `${initialClassName} ${getActiveKeys({ head: isHead })}`
  const gridColumns = React.useMemo(() => {
    if (columns) return columns
    return `repeat(${React.Children.count(children)}, 1fr)`
  }, [children, columns])

  React.useEffect(() => {
    if (isHead && isSticky !== isTableScrolling) {
      setIsSticky(isTableScrolling)
    }
  }, [isHead, isSticky, isTableScrolling])

  return (
    <BaseTableRow
      className={className}
      gridColumns={gridColumns}
      scrolltop={(isSticky && 1) || 0}
      {...rest}>
      {children}
    </BaseTableRow>
  )
}
TableRow.defaultProps = {
  children: undefined,
  className: '',
  columns: '',
  height: '',
  isHead: false,
  isTableScrolling: false,
}
TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.string, // provided by src/Table component
  height: PropTypes.string,
  isHead: PropTypes.bool,
  isTableScrolling: PropTypes.bool, // provided by src/Table component
}

export default TableRow
