import React from 'react'
import PropTypes from 'prop-types'
import { translate as t } from '~utils/functions'

import Input from '~components/Input'
import Fieldset from '~components/Fieldset'

/**
 * AuthInput
 * @component
 *
 */
function AuthInput(props) {
  const { label, ...rest } = props
  return (
    <Fieldset legend={label}>
      <Input {...rest} width="96%" />
    </Fieldset>
  )
}
AuthInput.defaultProps = {}
AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
}

export default AuthInput

export const UsernameInput = (props) => (
  <AuthInput label={t`USERNAME`} placeholder="example@example.com" {...props} />
)

export const PasswordInput = (props) => (
  <AuthInput
    label={t`PASSWORD`}
    placeholder={t`PASSWORD`}
    type="password"
    {...props}
  />
)
