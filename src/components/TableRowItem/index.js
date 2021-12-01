import React from 'react'
import PropTypes from 'prop-types'
import BaseTableRowItem from './style'

/**
 * TableRowItem
 * @component
 *
 */
function TableRowItem(props) {
  const { className, handleClick, head, center, ...rest } = props

  let classN = className
  if (head) classN = `${classN} head`
  if (center) classN = `${classN} center`

  return <BaseTableRowItem className={classN} onClick={handleClick} {...rest} />
}
TableRowItem.defaultProps = {
  center: false,
  className: '',
  handleClick: () => null,
  head: false,
}
TableRowItem.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  head: PropTypes.bool,
}

export default TableRowItem
