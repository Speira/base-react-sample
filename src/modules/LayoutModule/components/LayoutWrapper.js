import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'

import Wrapper from '~components/Wrapper'

const { NAV } = constants.HTML_WRAPPER_TAGS

/**
 * LayoutWrapper.
 *
 * @param {} props
 */
function LayoutWrapper(props) {
  const { children, style } = props
  return <Wrapper {...style}>{children}</Wrapper>
}
LayoutWrapper.defaultProps = {
  children: undefined,
  style: {},
}
LayoutWrapper.propTypes = {
  children: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.any),
}

export default LayoutWrapper

export const BodyWrapper = (props) => (
  <LayoutWrapper
    {...props}
    style={{
      primary: true,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: '100vh',
      width: '100%',
    }}
  />
)

export const FooterWrapper = (props) => (
  <LayoutWrapper
    {...props}
    style={{
      secondary: true,
      height: '100px',
      width: '100%',
    }}
  />
)

export const HeaderWrapper = (props) => (
  <LayoutWrapper
    {...props}
    type={NAV}
    style={{
      height: '72px',
      padding: '0 1em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
    }}
  />
)
