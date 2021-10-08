import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Wrapper from '~components/Wrapper'

const AdaptedWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FullPageWrapper = styled(AdaptedWrapper)`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  font-size: 1.5em;
`

/**
 * WrapperError
 * @component
 *
 */
function WrapperError(props) {
  const { fullpage, children, ...rest } = props
  let StyledWrapper = AdaptedWrapper
  if (fullpage) {
    StyledWrapper = FullPageWrapper
  }
  return <StyledWrapper {...rest}>{children}</StyledWrapper>
}
WrapperError.defaultProps = {
  fullpage: false,
}
WrapperError.propTypes = {
  children: PropTypes.node.isRequired,
  fullpage: PropTypes.bool,
}

export default WrapperError
