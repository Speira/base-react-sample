import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { translate as t } from '~utils/functions'

import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

const AdaptedWrapper = styled(Wrapper)`
  margin: 3%;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 4px;
  display: flex;
  padding: 0 3% 2em 3%;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY};
  box-shadow: 0 2px -1px ${({ theme }) => theme.COLORS.BACKGROUND};
  min-height: 5em;
  label {
    margin-bottom: 8px;
  }
  .center {
    align-self: center;
  }
  .left {
    align-self: flex-start;
  }
  .right {
    align-self: flex-end;
  }
  @media (min-width: 1024px) {
    margin: 0 20%;
  }
  @media (min-width: 1600px) {
    margin: 0 30%;
  }
`

/**
 * WrapperAuth
 * @component
 *
 */
function WrapperAuth(props) {
  const { children, title } = props
  return (
    <AdaptedWrapper>
      <div className="row">
        <Title>{title}</Title>
        {children}
      </div>
    </AdaptedWrapper>
  )
}
WrapperAuth.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
export default WrapperAuth

export const LoginWrapper = (props) => (
  <WrapperAuth {...props} title={t`LOGIN`} />
)
export const SignupWrapper = (props) => (
  <WrapperAuth {...props} title={t`SIGNUP`} />
)
export const RegistrationSentWrapper = (props) => (
  <WrapperAuth {...props} title={t`SIGNUP_MAIL_SENT`} />
)
