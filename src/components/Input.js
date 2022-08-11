import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import constants from '~utils/constants'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import useTimeoutOverride from '~hooks/useTimeoutOverride'

const { STATUS } = constants

/**
 * StyledInput
 * @component
 *
 */
const StyledInput = styled.input`
  background-color: var(--color-light);
  border-width: 0;
  border-style: solid;
  border-radius: 2px;
  margin: auto;
  outline: none;
  position: relative;
  padding: 0.4em;
  transition: all 0.18s ease-in-out;
  &.border {
    border-width: 1px;
  }
  &.danger {
    border-width: 2px;
  }
  &:hover {
  }
  &:focus {
    box-shadow: 0 0 3px -1px currentcolor inset;
  }
  &:disabled {
    box-shadow: none;
    opacity: 0.6;
    cursor: text;
  }
  &:disabled:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transition: none;
    background-color: var(--color-dark);
  }
`

/**
 * Input
 * @component
 *
 * @desc ::
 *      We can set isAsync at true to improve performance when we want to
 *      execute an heavy task on each value update
 *
 *
 */
function Input(props) {
  const {
    className,
    isAsync,
    onBlur,
    onChange,
    placeholder,
    status,
    type,
    value,
    width,
    ...rest
  } = props

  const { overrideTimeout, cancelTimeout } = useTimeoutOverride()

  const eventAdapter = (event) => {
    if (event.target.type === 'checkbox') return event.target.checked
    return event.target.value
  }

  const handleChange = (event) => {
    const callback = () => {
      onChange(eventAdapter(event))
      if (isAsync) cancelTimeout()
    }
    if (isAsync) overrideTimeout({ timer: 1200, callback })
    else callback()
  }

  const handleblur = (event) => onBlur(eventAdapter(event))

  return (
    <StyledInput
      {...rest}
      className={`${className} ${
        status && `border ${status} border-${status} text-${status}`
      }`}
      onBlur={handleblur}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      value={value}
      width={width}
    />
  )
}

Input.defaultProps = {
  className: '',
  isAsync: false,
  onBlur: () => null,
  onChange: () => null,
  placeholder: '',
  status: '',
  type: 'text',
  value: '',
  width: '',
}
Input.propTypes = {
  className: PropTypes.string,
  isAsync: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  width: PropTypes.string,
}

export default withAsyncErrorHandling(Input)
