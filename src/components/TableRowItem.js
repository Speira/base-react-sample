import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledTableRowItem
 * @component
 *
 */
const StyledTableRowItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: -1px 0 4px -2px var(--color-dark);
  padding: 4px;
  overflow-x: auto;
  &.head {
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
  }
  &.center {
    justify-content: center;
  }
  &:first-child {
    border-left: none;
  }
`

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
