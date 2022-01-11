import React from 'react'
import styled from 'styled-components'
import Wrapper from '~components/Wrapper'

const ColoredWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
`

/**
 * BodyWrapper
 * @component
 *
 */
function BodyWrapper(props) {
  const options = {
    width: '100%',
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
  return <ColoredWrapper options={options} {...props} />
}

export default BodyWrapper
