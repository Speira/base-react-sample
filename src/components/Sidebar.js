import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledSidebar
 * @component
 */
const StyledSidebar = styled.div`
  align-self: flex-end;
  position: fixed;
  height: 100vh;
  right: -16em;
  width: 16em;
  opacity: 0;
  background-color: var(--color-primary);
  z-index: 5;
  .sidebar-close-link {
    height: 72px;
    align-self: flex-end;
  }
  .sidebar-nav a {
    height: 3.5em;
  }
  transition-property: right, opacity;
  transition-duration: 0.5s;
  &.collapsed {
    right: 0em;
    opacity: 1;
  }
`

/**
 * Sidebar
 * @component
 *
 */
function Sidebar(props) {
  const { children, className, isCollapsed, ...rest } = props
  return (
    <StyledSidebar
      className={`${className} hide-after-xs flex-column ${
        isCollapsed && 'collapsed'
      }`}
      {...rest}>
      {children}
    </StyledSidebar>
  )
}
Sidebar.defaultProps = {
  children: undefined,
  className: '',
  isCollapsed: false,
}
Sidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isCollapsed: PropTypes.bool,
}

export default Sidebar
