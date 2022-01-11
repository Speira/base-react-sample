import React from 'react'
import styled from 'styled-components'
import constants from '~utils/constants'
import Wrapper from '~components/Wrapper'

const {
  HTML_WRAPPER_TAGS: { NAV },
} = constants

const ColoredWrapper = styled(Wrapper)`
  color: ${({ theme }) => theme.COLORS.FOREGROUND};
`

/**
 * HeaderWrapper
 * @component
 *
 */
function HeaderWrapper(props) {
  const options = {
    height: '72px',
    padding: '0 1em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  }
  return <ColoredWrapper type={NAV} options={options} {...props} />
}

export default HeaderWrapper
