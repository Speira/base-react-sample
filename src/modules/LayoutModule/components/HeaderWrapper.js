import React from 'react'
import Wrapper from '~components/Wrapper'

/**
 * WrapperHeader
 * @component
 * @module Layout
 *
 */
export default function WrapperHeader(props) {
  return (
    <Wrapper
      secondary
      style={{
        alignItems: 'center',
        boxShadow: '0px 1px 4px -2px',
        display: 'flex',
        height: '72px',
        justifyContent: 'space-between',
        padding: '0 1em',
        xs: {
          height: 'auto',
          minHeight: '72px',
        },
      }}
      {...props}
    />
  )
}
