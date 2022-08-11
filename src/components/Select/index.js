import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'
import StyledSelect from './style'

/**
 *
 * Select
 * @component
 *
 * @desc :: Component for selects
 *
 */
function Select(props) {
  const { className, options, onChange, value, ...rest } = props
  const localOptions = options.map((opt) =>
    typeof opt === 'string' ? { key: opt, label: opt } : opt,
  )
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <StyledSelect
      className={className}
      onChange={handleChange}
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
    </StyledSelect>
  )
}
Select.defaultProps = {
  className: '',
  onChange: () => null,
  options: [],
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
  value: PropTypes.string,
}

export default Select
