import React from 'react'
import PropTypes from 'prop-types'
import { getActiveKeys } from '~utils/functions'
import constants from '~utils/constants'
import BaseTableRowItem from './style'

const { STATUS } = constants

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
  const {
    isCenter,
    className: initialClassName,
    handleClick,
    isHead,
    primary,
    quaternary,
    secondary,
    status,
    tertiary,
    ...rest
  } = props

  const className = `${initialClassName} ${getActiveKeys({
    head: isHead,
    center: isCenter,
    primary,
    quaternary,
    secondary,
    tertiary,
  })}`

  return (
    <BaseTableRowItem
      status={status}
      className={className}
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
  primary: false,
  quaternary: false,
  secondary: false,
  status: '',
  tertiary: false,
}
TableRowItem.propTypes = {
  className: PropTypes.string,
  handleClick: PropTypes.func,
  isCenter: PropTypes.bool,
  isHead: PropTypes.bool,
  /** primary: theme static color (background) */
  primary: PropTypes.bool,
  /** quaternary: theme static color (background) */
  quaternary: PropTypes.bool,
  /** secondary: theme static color (background) */
  secondary: PropTypes.bool,
  /** Status */
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  /** tertiary: theme static color (background) */
  tertiary: PropTypes.bool,
}

export default TableRowItem
