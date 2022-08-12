import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from '~components/Wrapper'

/**
 * AuthWrapper
 * @component
 *
 */
function AuthWrapper(props) {
  const { children } = props
  return (
    <div className="flex justify-content-center full-width">
      <Wrapper
        customStyle={{ width: '400px', md: { width: '720px' } }}
        className="box bg-secondary flex-column justify-content-start shadow-top-right ">
        {children}
      </Wrapper>
    </div>
  )
}
AuthWrapper.defaultProps = {
  children: undefined,
}
AuthWrapper.propTypes = {
  children: PropTypes.node,
}

export default AuthWrapper
