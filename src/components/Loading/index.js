import React from 'react'
import PropTypes from 'prop-types'
import BaseLoading from './style'

/**
 * Loading
 * @component
 *
 */
function Loading(props) {
  const { message, ...rest } = props
  return (
    <BaseLoading {...rest}>
      <div className="loader-message">{message}</div>
      <div className="loader" />
    </BaseLoading>
  )
}
Loading.defaultProps = {
  className: '',
  message: '',
}
Loading.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
}

export default Loading
