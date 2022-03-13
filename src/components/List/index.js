import React from 'react'
import PropTypes from 'prop-types'
import { getActiveKeys } from '~utils/functions'
import BaseList from './style'

/**
 * List
 * @component
 *
 */
function List(props) {
  const { boxed, className: initialClassName, listStyle, ...rest } = props
  const className = `${initialClassName} ${getActiveKeys({ boxed })}`
  return <BaseList {...rest} className={className} listStyle={listStyle} />
}
List.defaultProps = {
  className: '',
  boxed: false,
  listStyle: 'none',
}
List.propTypes = {
  className: PropTypes.string,
  boxed: PropTypes.bool,
  /** style of the list (circle, dotted, etc) */
  listStyle: PropTypes.string,
}

export default List
