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
  const { type, ...rest } = props
  let BaseTitle = TitleH1
  if (type === 'h2') BaseTitle = TitleH2
  return <BaseTitle {...rest} />
}
Title.defaultProps = {
  type: 'h1',
  color: '',
}
Title.propTypes = {
  color: PropTypes.oneOf([...colorsThemesList, '']),
  type: PropTypes.oneOf(['h1', 'h2']),
}

export default Title
