import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledNavBar
 * @component
 *
 */
const StyledNavBar = styled.nav`
  box-shadow: 0px 1px 4px -2px var(--color-dark);
  height: 72px;
`

/**
 * NavBar
 * @component
 *
 */
function NavBar(props) {
  const { children, className, ...rest } = props
  return (
    <StyledNavBar
      {...rest}
      className={`${className}
        bg-primary flex align-items-center justify-content-between padding`}>
      {children}
    </StyledNavBar>
  )
}
NavBar.defaultProps = {
  className: '',
  children: undefined,
}
NavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default NavBar
