import React from 'react'
import Wrapper from '~components/Wrapper'

/**
 * WrapperFooter
 * @component
 * @module Layout
 *
 */
export default function WrapperFooter(props) {
  return (
    <Wrapper
      secondary
      customStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px -1px 4px -2px',
        height: '100px',
        width: '100%',
      }}
      {...props}
    />
  )
}
