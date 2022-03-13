import React from 'react'
import PropTypes from 'prop-types'
import FooterContainer from '~LayoutModule/containers/FooterContainer'
import HeaderContainer from '~LayoutModule/containers/HeaderContainer'
import BodyContainer from '~LayoutModule/containers/BodyContainer'

/**
 * LayoutModule
 * @component
 *
 */
function LayoutModule(props) {
  const { children } = props
  return (
    <BodyContainer>
      <HeaderContainer />
      {children}
      <FooterContainer />
    </BodyContainer>
  )
}
LayoutModule.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutModule
