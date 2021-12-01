import React from 'react'
import PropTypes from 'prop-types'

import { colorsThemesList } from '~contexts/ThemeContext'
import { withAsyncErrorHandling } from '~contexts/ErrorContext'
import useTimeoutOverride from '~hooks/useTimeoutOverride'

import BaseInput, { BaseTextarea } from './style'

/**
 * Input
 * @component
 *
 */
function Input(props) {
  const {
    color,
    isAsync,
    isCheckbox,
    isLongtext,
    isNumber,
    onChange,
    password,
    value,
    width,
    ...rest
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

  let InputComponent = BaseInput
  let type = 'text'
  if (isCheckbox) type = 'checkbox'
  if (isNumber) type = 'number'
  if (password) type = 'password'
  if (isLongtext) InputComponent = BaseTextarea

  React.useEffect(() => setLocalValue(value), [value])
  return (
    <InputComponent
      {...rest}
      checked={!!localValue}
      color={color}
      onBlur={handleBlur}
      onChange={handleChange}
      type={type}
      value={localValue}
      width={width}
    />
  )
}

Input.defaultProps = {
  className: '',
  color: colorsThemesList[0],
  isAsync: false,
  isCheckbox: false,
  isLongtext: false,
  isNumber: false,
  onBlur: () => null,
  onChange: () => null,
  password: false,
  value: '',
  width: '',
}
Input.propTypes = {
  /**
   * isAsync : weither the value should handle change asynchronously, usefull
   * whene an update performs many treatments
   */
  isAsync: PropTypes.bool,
  className: PropTypes.string,
  /**
   * color : color of the theme, including status (danger,info,success,warning)
   * and theme (primary, secondary ,...)
   */
  color: PropTypes.oneOf(colorsThemesList),
  isCheckbox: PropTypes.bool,
  isLongtext: PropTypes.bool,
  isNumber: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  password: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  width: PropTypes.string,
}

export default withAsyncErrorHandling(Input)
