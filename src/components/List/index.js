import React from 'react'
import PropTypes from 'prop-types'
import BaseList from './style'

/**
 * List
 * @component
 *
 */
function List(props) {
  const { boxed, ...rest } = props
  const pseudoProps = { ...rest }
  if (boxed) pseudoProps.className = `${rest.className} boxed`
  return <BaseList {...pseudoProps} />
}
List.defaultProps = {
  className: '',
  boxed: false,
}
List.propTypes = {
  className: PropTypes.string,
  boxed: PropTypes.bool,
}

export default List
