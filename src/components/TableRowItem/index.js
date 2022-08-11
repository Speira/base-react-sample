import React from 'react'
import PropTypes from 'prop-types'
import StyledTableRowItem from './style'

/**
 * TableRowItem
 * @component
 *
 * @desc::  An Item in a Row in a Table
 *   Adding optional isHead className and set default grid columns here
 *
 * @see See components/Table
 * @see See components/TableRow
 *
 */
function TableRowItem(props) {
  const { isCenter, className, handleClick, isHead, ...rest } = props
  return (
    <StyledTableRowItem
      className={`${className} ${isHead && 'head'} ${isCenter && 'center'}`}
      onClick={handleClick}
      {...rest}
    />
  )
}
TableRowItem.defaultProps = {
  className: '',
  handleClick: () => null,
  isCenter: false,
  isHead: false,
}
TableRowItem.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  isCenter: PropTypes.bool,
  isHead: PropTypes.bool,
}

export default TableRowItem
