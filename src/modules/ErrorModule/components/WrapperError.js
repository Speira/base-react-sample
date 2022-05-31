import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '~contexts/ThemeContext'

import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

/**
 * WrapperError
 * @component
 *
 */
function WrapperError(props) {
  const { message, isFullpage, children, title, ...rest } = props
  const { colors } = useTheme()
  let style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }
  if (isFullpage) {
    style = {
      ...style,
      height: '100vh',
      backgroundColor: colors.STATIC.SECONDARY,
      fontSize: '1.5em',
    }
  }

  return (
    <Wrapper customStyle={style} {...rest}>
      <Title>{title}</Title>
      <p>{message}</p>
      {children}
    </Wrapper>
  )
}
WrapperError.defaultProps = {
  isFullpage: false,
}
WrapperError.propTypes = {
  children: PropTypes.node.isRequired,
  isFullpage: PropTypes.bool,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default WrapperError
