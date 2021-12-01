import React from 'react'
import styled from 'styled-components'
import BaseWrapper from '~components/Wrapper'

/**
 * Wrapper
 * @component
 *
 */
const Wrapper = styled(BaseWrapper)`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`

/**
 * FooterWrapper
 * @component
 *
 */
function FooterWrapper(props) {
  return <Wrapper {...props} />
}

export default FooterWrapper
