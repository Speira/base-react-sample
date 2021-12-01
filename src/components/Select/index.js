import React from 'react'
import PropTypes from 'prop-types'

import { colorsThemesList } from '~contexts/ThemeContext'
import BaseSelect from './style'

/**
 * Select
 * @component
 *
 */
function Select(props) {
  const { options, onChange, value, color, className } = props
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  return (
    <BaseSelect
      className={className}
      color={color}
      onChange={handleChange}
      value={value}>
      <option value="" disabled hidden>
        Choose :
      </option>
      {options.map(({ key, title }) => (
        <option key={`${key}-${title}`} title={title} value={key}>
          {title}
        </option>
      ))}
    </BaseSelect>
  )
}
Select.defaultProps = {
  className: '',
  color: colorsThemesList[0],
  onChange: () => null,
  options: [],
  value: '',
}
Select.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(colorsThemesList),
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      key: PropTypes.string,
    }),
  ),
  value: PropTypes.string,
}

export default Select
