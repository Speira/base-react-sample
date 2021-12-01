import React from 'react'
import PropTypes from 'prop-types'
import BaseListItem from './style'

/**
 * ListItem
 * @component
 *
 */
function ListItem(props) {
  return <BaseListItem {...props} />
}
ListItem.defaultProps = {
  className: '',
}
ListItem.propTypes = {
  className: PropTypes.string,
}

export default ListItem
