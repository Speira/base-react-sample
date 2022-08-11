import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledFooter
 * @component
 */
const StyledFooter = styled.div`
  height: 100px;
  box-shadow: 0px -1px 4px -2px var(--color-dark);
`

/**
 * Footer
 * @component
 *
 */
function Footer(props) {
  const { children, className, ...rest } = props
  return (
    <StyledFooter
      className={`${className}
     bg-primary flex justify-content-center align-items-center full-width`}
      {...rest}>
      {children}
    </StyledFooter>
  )
}
Footer.defaultProps = {
  children: undefined,
  className: '',
}
Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Footer
