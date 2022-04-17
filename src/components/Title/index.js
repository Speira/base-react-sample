import React from 'react'
import PropTypes from 'prop-types'
import { getActiveKeys } from '~utils/functions'
import constants from '~utils/constants'
import BaseTitle from './style'

const { STATUS } = constants

/**
 * Title
 * @component
 *
 */
function Title(props) {
  const {
    center,
    className: initialClassName,
    inline,
    left,
    light,
    margin,
    padding,
    right,
    status,
    type,
    ...rest
  } = props

  const className = `${initialClassName} ${getActiveKeys({
    center,
    inline,
    left,
    light,
    right,
  })}`

  return (
    <BaseTitle
      className={className}
      margin={margin}
      padding={padding}
      status={status}
      type={type}
      {...rest}
    />
  )
}
Title.defaultProps = {
  center: false,
  className: '',
  inline: false,
  left: false,
  light: false,
  margin: '',
  padding: '',
  right: false,
  status: '',
  type: 'h1',
}
Title.propTypes = {
  center: PropTypes.bool,
  className: PropTypes.string,
  inline: PropTypes.bool,
  left: PropTypes.bool,
  light: PropTypes.bool,
  margin: PropTypes.string,
  padding: PropTypes.string,
  right: PropTypes.bool,
  status: PropTypes.oneOf([...Object.values(STATUS), '']),
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
}

export default Title
