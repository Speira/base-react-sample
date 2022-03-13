import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from '~components/Wrapper'

/**
 * LayoutWrapperFooter.
 *
 * @param {} props
 */
function LayoutWrapperFooter(props) {
  const { children } = props
  return (
    <Wrapper secondary style={{ height: '100px', width: '100%' }}>
      {children}
    </Wrapper>
  )
}
LayoutWrapperFooter.defaultProps = {
  children: undefined,
}
LayoutWrapperFooter.propTypes = {
  children: PropTypes.node,
}

export default LayoutWrapperFooter
