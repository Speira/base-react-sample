import React from 'react'
import PropTypes from 'prop-types'

import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

/**
 * SmallWrapper
 * @component
 *
 */
export default function SmallWrapper(props) {
  const { message, children, title, ...rest } = props
  return (
    <Wrapper
      customStyle={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      {...rest}>
      <Title>{title}</Title>
      <p>{message}</p>
      {children}
    </Wrapper>
  )
}

SmallWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
