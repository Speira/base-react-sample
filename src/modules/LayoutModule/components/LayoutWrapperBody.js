import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from '~components/Wrapper'

/**
 * LayoutWrapperBody.
 *
 * @param {Object} props
 */
function LayoutWrapperBody(props) {
  const { children } = props
  return (
    <Wrapper
      primary
      style={{
        base: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100vh',
          width: '100%',
        },
        xs: {
          justifyContent: 'space-around',
        },
      }}>
      {children}
    </Wrapper>
  )
}
LayoutWrapperBody.defaultProps = {
  children: undefined,
}
LayoutWrapperBody.propTypes = {
  children: PropTypes.node,
}

export default LayoutWrapperBody
