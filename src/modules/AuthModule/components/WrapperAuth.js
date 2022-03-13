import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'
import { useTheme } from '~contexts/ThemeContext'

import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

/**
 * WrapperAuth
 * @component
 *
 */
function WrapperAuth(props) {
  const { children, title } = props
  const { colors } = useTheme()
  return (
    <Wrapper
      secondary
      margin="3%"
      borderRadius="4px"
      padding="0 3% 2em 3%"
      boxShadow={`0 2px -1px ${colors.DARK}`}
      minHeight="5em"
      flex={{ direction: 'column', justifyContent: 'flex-start' }}
      md={{ margin: '0 20%', flex: { justifyContent: 'center' } }}
      lg={{ margin: '0 30%' }}>
      <div className="row">
        <Title>{title}</Title>
        {children}
      </div>
    </Wrapper>
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
