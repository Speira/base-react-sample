import React from 'react'
import constants from '~utils/constants'
import PropTypes from 'prop-types'

import Wrapper from '~components/Wrapper'

const { HTML_WRAPPER_TAGS } = constants

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
      tag={HTML_WRAPPER_TAGS.FORM}
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
