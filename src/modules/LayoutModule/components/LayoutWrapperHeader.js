import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import Wrapper from '~components/Wrapper'

const { NAV } = constants.HTML_WRAPPER_TAGS

/**
 * LayoutWrapperHeader.
 *
 * @param {} props
 */
function LayoutWrapperHeader(props) {
  const { children } = props
  return (
    <Wrapper
      tag={NAV}
      style={{
        alignItems: 'center',
        display: 'flex',
        height: '72px',
        justifyContent: 'space-between',
        padding: '0 1em',
      }}>
      {children}
    </Wrapper>
  )
}
LayoutWrapperHeader.defaultProps = {
  children: undefined,
}
LayoutWrapperHeader.propTypes = {
  children: PropTypes.node,
}

export default LayoutWrapperHeader
