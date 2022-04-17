import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from '~components/Fieldset'
import Input from '~components/Input'
import Label from '~components/Label'

/**
 * AuthInput
 * @component
 *
 */
function AuthInput(props) {
  const { label, ...rest } = props
  return (
    <Label>
      <Fieldset legend={label}>
        <Input {...rest} width="96%" />
      </Fieldset>
    </Label>
  )
}
AuthInput.defaultProps = {}
AuthInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default AuthInput
