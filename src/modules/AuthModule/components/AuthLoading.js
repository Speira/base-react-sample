import React from 'react'
import PropTypes from 'prop-types'
import Loading from '~components/Loading'

/**
 * AuthLoading
 * @component
 *
 */
function AuthLoading(props) {
  const { label, ...rest } = props
  return <Loading message={label} {...rest} />
}

AuthLoading.propTypes = {
  label: PropTypes.string.isRequired,
}

export default AuthLoading
