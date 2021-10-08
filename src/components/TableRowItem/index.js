import React from 'react'
import PropTypes from 'prop-types'
import BaseTableRowItem from './style'

/**
 * TableRowItem
 * @component
 *
 */
function TableRowItem(props) {
  const { className, head, ...rest } = props
  const newProps = { ...rest }
  newProps.className = head ? `${className} head` : className
  return <BaseTableRowItem {...newProps} />
}
TableRowItem.defaultProps = {
  className: '',
  head: false,
}
TableRowItem.propTypes = {
  className: PropTypes.string,
  head: PropTypes.bool,
}

export default TableRowItem
