import React from 'react'
import Wrapper from '~components/Wrapper'

/**
 * WrapperBody
 * @component
 * @module Layout
 *
 */
export default function WrapperBody(props) {
  return (
    <Wrapper
      primary
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
        width: '100%',
        xs: {
          fontSize: '1.4em',
        },
      }}
      {...props}
    />
  )
}
