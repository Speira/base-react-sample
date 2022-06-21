import React from 'react'
import PropTypes from 'prop-types'

import { translate as t } from '~utils/functions'
import InputField from '~components/InputField'

/**
 * AuthInputs
 * @component
 *
 */
function AuthInputs(props) {
  const { username, setUsername, password, setPassword } = props
  return (
    <>
      <InputField
        label={t`USERNAME`}
        placeholder="example@example.com"
        type="email"
        value={username}
        onChange={setUsername}
      />
      <InputField
        label={t`PASSWORD`}
        placeholder={t`PASSWORD`}
        type="password"
        value={password}
        onChange={setPassword}
      />
    </>
  )
}
AuthInputs.defaultProps = {}
AuthInputs.propTypes = {
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  setUsername: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
}

export default AuthInputs
