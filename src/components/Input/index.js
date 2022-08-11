import React from 'react'
import PropTypes from 'prop-types'

import constants from '~utils/constants'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import useTimeoutOverride from '~hooks/useTimeoutOverride'

import StyledInput from './style'

const { STATUS } = constants

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
