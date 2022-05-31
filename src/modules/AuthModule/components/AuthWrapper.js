import React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '~contexts/ThemeContext'

import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

/**
 * AuthWrapper
 * @component
 *
 */
function AuthWrapper(props) {
  const { children, style, title, ...rest } = props
  const { colors } = useTheme()
  return (
    <Wrapper
      secondary
      customStyle={{
        borderRadius: '4px',
        boxShadow: `2px -2px 4px -2px ${colors.STATIC.DARK}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        margin: '3%',
        minHeight: '5em',
        padding: '0 3% 2em 3%',
        md: {
          margin: '0 20%',
          justifyContent: 'center',
        },
        lg: {
          margin: '0 30%',
        },
        ...style,
      }}
      {...rest}>
      <div className="row">
        <Title>{title}</Title>
      </div>
      {children}
    </Wrapper>
  )
}
AuthWrapper.defaultProps = { style: {} }
AuthWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}
export default AuthWrapper
