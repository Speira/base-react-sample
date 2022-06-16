import React from 'react'
import Wrapper from '~components/Wrapper'

/**
 * WrapperNav
 * @component
 * @module Layout
 *
 */
export default function WrapperNav(props) {
  return <Wrapper tag="nav" customStyle={{ display: 'flex' }} {...props} />
}
