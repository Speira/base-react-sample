import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as ReactLink } from 'react-router-dom'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import constants from '~utils/constants'

const { MEDIA_QUERIES, STATUS } = constants

/**
 * StyledLink
 * @component
 *
 */
const StyledLink = styled(ReactLink)`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  padding: 5px;
  margin: 0 4px;
  text-decoration: underline;
  color: var(--bg-text-color);
  &:active {
    opacity: 0.5;
  }

  &.boxed {
    font-weight: 600;
    border-radius: 4px;
    box-shadow: 1px 1px 1px 1px currentcolor;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  &.boxed:hover {
    transition: all 0.3s;
    box-shadow: 1px 1px 2px 2px currentcolor;
    transform: translateZ(1em);
    opacity: 0.8;
  }
  @media only screen and (min-width: ${MEDIA_QUERIES.MD}) {
    padding: 8px;
  }
`
/**
 * Link
 * @component
 *
 */
function Link(props) {
  const {
    boxed,
    children,
    className: initialClassName,
    href,
    to,
    status,
    ...rest
  } = props

  const hasBG = boxed && status
  const className = `${initialClassName} ${boxed && 'boxed'} ${
    hasBG && `bg-light-${status}`
  }`

  return (
    <StyledLink
      {...rest}
      tag="link"
      status={status}
      className={className}
      to={to || href}>
      {children}
    </StyledLink>
  )
}
Link.defaultProps = {
  boxed: false,
  children: undefined,
  className: '',
  href: '#',
  size: '',
  status: '',
  to: '',
}
Link.propTypes = {
  boxed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  to: PropTypes.string,
}

export default withAsyncErrorHandling(Link)
