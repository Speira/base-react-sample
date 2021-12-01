import React from 'react'
import styled from 'styled-components'
import BaseWrapper from '~components/Wrapper'

const Wrapper = styled(BaseWrapper)`
  color: ${({ theme }) => theme.COLORS.FOREGROUND};
  height: 72px;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`

/**
 * HeaderWrapper
 * @component
 *
 */
function HeaderWrapper(props) {
  return <Wrapper {...props} />
}

export default HeaderWrapper
