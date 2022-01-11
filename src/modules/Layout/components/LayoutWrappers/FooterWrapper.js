import React from 'react'
import styled from 'styled-components'
import Wrapper from '~components/Wrapper'

/**
 * ColoredWrapper
 * @component
 *
 */
const ColoredWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
`

/**
 * FooterWrapper
 * @component
 *
 */
function FooterWrapper(props) {
  const options = {
    height: '100px',
    width: '100%',
  }
  return <ColoredWrapper options={options} {...props} />
}

export default FooterWrapper
