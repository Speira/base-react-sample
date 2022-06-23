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
      customStyle={{
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
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
