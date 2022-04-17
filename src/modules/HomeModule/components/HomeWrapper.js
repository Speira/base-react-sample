import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from '~components/Wrapper'

/**
 * HomeWrapper
 * @component
 *
 */
function HomeWrapper(props) {
  const { children, ...rest } = props
  return (
    <Wrapper
      {...rest}
      style={{
        padding: '3%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      {children}
    </Wrapper>
  )
}

HomeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeWrapper
