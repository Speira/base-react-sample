import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '~contexts/ThemeContext'

import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

/**
 * FullpageWrapper
 * @component
 *
 */
export default function FullpageWrapper(props) {
  const { message, children, title, ...rest } = props
  const { colors } = useTheme()

  return (
    <Wrapper
      customStyle={{
        alignItems: 'center',
        backgroundColor: colors.STATIC.SECONDARY,
        display: 'flex',
        flexDirection: 'column',
        fontSize: '1.5em',
        height: '100vh',
        justifyContent: 'center',
      }}
      {...rest}>
      <Title>{title}</Title>
      <p>{message}</p>
      {children}
    </Wrapper>
  )
}

FullpageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
