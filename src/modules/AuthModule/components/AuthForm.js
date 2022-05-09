import React from 'react'
import PropTypes from 'prop-types'

import Wrapper from '~components/Wrapper'

/**
 * AuthForm
 * @component
 *
 */
function AuthForm(props) {
  const { children, style, ...rest } = props
  return (
    <Wrapper
      {...rest}
      tag="form"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gridRowGap: '1em',
        margin: '0 0 0.5em',
        ...style,
      }}>
      {children}
    </Wrapper>
  )
}
AuthForm.defaultProps = {
  style: {},
}
AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  ),
}

export default AuthForm
