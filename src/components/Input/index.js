import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'

import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import useTimeoutOverride from '~hooks/useTimeoutOverride'

import BaseInput, { BaseTextarea } from './style'

const { FIELD_TYPES, STATUS } = constants

/**
 * Input
 * @component
 *
 */
function Input(props) {
  const {
    className,
    isAsync,
    isLongtext,
    onChange,
    placeholder,
    status,
    type,
    value,
    width,
  } = props
  const [localValue, setLocalValue] = React.useState(value)
  const { overrideTimeout, cancelTimeout } = useTimeoutOverride()

  const sendValue = (val) => {
    onChange(val)
    if (isAsync) cancelTimeout()
  }

  const handleBlur = () => sendValue(localValue)

  const handleChange = (e) => {
    let nextValue = ''
    if (e.target.type === 'checkbox') {
      nextValue = e.target.checked
      setLocalValue(nextValue)
    } else {
      nextValue = e.target.value
      setLocalValue(nextValue)
      const callback = () => sendValue(nextValue)
      if (isAsync) overrideTimeout({ callback, timer: 1200 })
    }
    if (!isAsync) onChange(nextValue)
  }

  const InputComponent = isLongtext ? BaseTextarea : BaseInput

  React.useEffect(() => setLocalValue(value), [value])
  const inputValue =
    type === FIELD_TYPES.CHECKBOX
      ? { checked: !!localValue }
      : { value: localValue }
  return (
    <InputComponent
      {...inputValue}
      className={className}
      onBlur={handleBlur}
      onChange={handleChange}
      placeholder={placeholder}
      status={status}
      type={type}
      width={width}
    />
  )
}

Input.defaultProps = {
  className: '',
  isAsync: false,
  isLongtext: false,
  onBlur: () => null,
  onChange: () => null,
  placeholder: '',
  status: STATUS.INFO,
  type: FIELD_TYPES.TEXT,
  value: '',
  width: '',
}
Input.propTypes = {
  className: PropTypes.string,
  /**
   * isAsync : weither the value should handle change asynchronously, usefull
   * whene an update performs many treatments
   */
  isAsync: PropTypes.bool,
  isLongtext: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  status: PropTypes.oneOf(Object.values(STATUS)),
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  width: PropTypes.string,
}

export default withAsyncErrorHandling(Input)
