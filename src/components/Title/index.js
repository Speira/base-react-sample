import React from 'react'
import PropTypes from 'prop-types'
import { colorsThemesList } from '~contexts/ThemeContext'
import TitleH1, { TitleH2 } from './style'

/**
 * Title
 * @component
 *
 */
function Title(props) {
  const { type, left, right, ...rest } = props
  let BaseTitle = TitleH1

  if (type === 'h2') BaseTitle = TitleH2
  const styledProps = { ...rest }
  if (left) styledProps.className = `${styledProps.className} left`
  if (right) styledProps.className = `${styledProps.className} right`

  return <BaseTitle {...rest} />
}
Title.defaultProps = {
  type: 'h1',
  color: '',
  left: PropTypes.left,
  right: PropTypes.left,
}
Title.propTypes = {
  color: PropTypes.oneOf([...colorsThemesList, '']),
  type: PropTypes.oneOf(['h1', 'h2']),
  left: PropTypes.bool,
  right: PropTypes.bool,
}

export default Title
