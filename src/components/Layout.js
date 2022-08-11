import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledLayout
 * @component
 *
 */
const StyledLayout = styled.div`
  min-height: 100vh;
`

/**
 * Layout
 * @component
 *
 */
function Layout(props) {
  const { children, className, ...rest } = props
  return (
    <StyledLayout
      className={`${className} flex-column justify-content-between full-width`}
      {...rest}>
      {children}
    </StyledLayout>
  )
}
Layout.defaultProps = {
  children: undefined,
  className: '',
}
Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Layout
