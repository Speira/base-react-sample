import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from '~components/Wrapper'

/**
 * LayoutWrapper.
 *
 * @param {} props
 */
function LayoutWrapper(props) {
  const { children, style, ...rest } = props
  return (
    <Wrapper style={{ ...style }} {...rest}>
      {children}
    </Wrapper>
  )
}
LayoutWrapper.defaultProps = {
  children: undefined,
  style: {},
}
LayoutWrapper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ),
}

export default LayoutWrapper
