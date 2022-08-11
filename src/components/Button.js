import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import constants from '~utils/constants'

const { STATUS } = constants

/**
 * StyledButton
 * @component
 *
 */
const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  box-shadow: 1px 1px 2px -1px var(--color-dark),
    -1px -1px 2px 0px var(--color-dark) inset;
  cursor: pointer;
  position: relative;
  outline: none;
  transition: all 0.05s ease-in-out;
  padding: 0.5em;
  margin: 0.5em;
  font-size: 1em;
  &:hover {
  }
  &:active {
    opacity: 0.5;
    transform: scale(0.96);
    transform-origin: bottom center;
    box-shadow: 0px 0px 1px -1px var(--color-dark),
      0px 0px 3px -1px currentcolor inset;
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
    cursor: text;
  }
  &:after {
    content: '';
    background-color: #ffffff33;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    border-radius: 2px;
    top: 0;
    left: 0;
    opacity: 0.5;
    transform: scale(0, 1);
    transform-origin: left;
    transition: none;
    border-radius: 8px;
  }
  &:hover:after {
    transform: scale(1, 1);
    transition: all 0.2s ease-in-out;
  }
  &:active:after {
    transform: scale(0, 1);
  }
  &:disabled:after {
    transform: none;
  }

  /* css classes variations */
  &.rounded {
    border-radius: 100%;
  }
  &.unboxed {
    border: none;
    box-shadow: none;
  }
`

/**
 * Button
 * @component
 */
function Button(props) {
  const { children, className: initialClassName, status, ...rest } = props
  return (
    <StyledButton
      className={`${initialClassName} bg-${status} text-light`}
      status={status}
      {...rest}>
      {children}
    </StyledButton>
  )
}
Button.defaultProps = {
  children: undefined,
  className: '',
  disabled: false,
  onClick: () => null,
  status: STATUS.INFO,
  type: 'button',
}
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.string,
}

export default withAsyncErrorHandling(Button)
