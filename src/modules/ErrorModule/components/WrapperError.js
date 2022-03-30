import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { translate as t } from '~utils/functions'

import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

/**
 * AdaptedWrapper
 * @component
 *
 */
const AdaptedWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
/**
 * FullPageWrapper
 * @component
 *
 */
const FullPageWrapper = styled(AdaptedWrapper)`
  height: 100vh;
  background-color: ${({ theme }) => theme.COLORS.STATIC.SECONDARY};
  font-size: 1.5em;
`

/**
 * WrapperError
 * @component
 *
 */
function WrapperError(props) {
  const { details, message, fullpage, children, title, ...rest } = props

  let StyledWrapper = AdaptedWrapper
  if (fullpage) StyledWrapper = FullPageWrapper

  return (
    <StyledWrapper {...rest}>
      <Title>{title}</Title>
      <p>{message}</p>
      {details && <p>{details}</p>}
      {children}
    </StyledWrapper>
  )
}
WrapperError.defaultProps = {
  details: '',
  fullpage: false,
}
WrapperError.propTypes = {
  children: PropTypes.node.isRequired,
  details: PropTypes.string,
  fullpage: PropTypes.bool,
  message: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default WrapperError

export const ServerErrorWrapper = (props) => (
  <WrapperError
    message={t`ERROR_500_MESSAGE`}
    title={t`ERROR_500`}
    {...props}
  />
)

export const NotAllowedWrapper = (props) => (
  <WrapperError
    message={t`ERROR_403_MESSAGE`}
    title={t`ERROR_403`}
    {...props}
  />
)

export const NotFoundWrapper = (props) => (
  <WrapperError
    message={t`ERROR_404_MESSAGE`}
    title={t`ERROR_404`}
    {...props}
  />
)
