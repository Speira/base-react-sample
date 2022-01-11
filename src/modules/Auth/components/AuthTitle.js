import React from 'react'
import { withI18NWords } from '~contexts/I18NContext'
import PropTypes from 'prop-types'

import Title from '~components/Title'

/**
 * AuthTitle
 * @component
 *
 */
function AuthTitle(props) {
  const { label } = props
  return (
    <div className="row">
      <Title>{label}</Title>
    </div>
  )
}
AuthTitle.defaultProps = {}
AuthTitle.propTypes = {
  label: PropTypes.string.isRequired,
}

export default AuthTitle

export const RegistrationTitle = withI18NWords(({ words, ...props }) => (
  <AuthTitle {...props} label={words.SIGNUP} />
))

export const LoginTitle = withI18NWords(({ words, ...props }) => (
  <AuthTitle {...props} label={words.LOGIN} />
))

export const RegistrationSentTitle = withI18NWords(({ words, ...props }) => (
  <AuthTitle {...props} label={words.SIGNUP_MAIL_SENT} />
))
