import React from 'react'
import PropTypes from 'prop-types'
import { getActiveKeys, translate as t } from '~utils/functions'
import constants from '~utils/constants'
import BaseSelect from './style'

const { STATUS } = constants

/**
 *
 * Select
 * @component
 *
 * @desc :: Component for selects
 *
 */
function Select(props) {
  const {
    className: initialClassName,
    options,
    primary,
    quaternary,
    secondary,
    status,
    tertiary,
    onChange,
    value,
    ...rest
  } = props

  const localOptions = options.map((opt) =>
    typeof opt === 'string' ? { key: opt, label: opt } : opt,
  )

  const className = `${initialClassName} ${getActiveKeys({
    primary,
    secondary,
    tertiary,
    quaternary,
  })}`

  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <BaseSelect
      className={className}
      onChange={handleChange}
      status={status}
      value={value}
      {...rest}>
      <option value="" disabled>
        {t`SELECT`}&nbsp;
      </option>
      {localOptions.map(({ key, label }) => (
        <option key={`${key}-${label}`} title={label} value={key}>
          {label}
        </option>
      ))}
    </BaseSelect>
  )
}
Select.defaultProps = {
  className: '',
  onChange: () => null,
  options: [],
  primary: false,
  quaternary: false,
  secondary: false,
  tertiary: false,
  status: '',
  value: '',
}
Select.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
      }),
      PropTypes.string,
    ]),
  ),
  primary: PropTypes.bool,
  quaternary: PropTypes.bool,
  secondary: PropTypes.bool,
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  tertiary: PropTypes.bool,
  value: PropTypes.string,
}

export default Select
