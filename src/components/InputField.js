import React from 'react'
import PropTypes from 'prop-types'

import Fieldset from '~components/Fieldset'
import Input from '~components/Input'
import Label from '~components/Label'

/**
 * InputField
 * @component
 * @see #Input
 * @see #Label
 * @see #Fieldset
 */
export default function InputField(props) {
  const { label, width, ...rest } = props
  return (
    <Label>
      <Fieldset legend={label}>
        <Input {...rest} width={width} />
      </Fieldset>
    </Label>
  )
}
InputField.defaultProps = {
  label: '',
  width: '100%',
}
InputField.propTypes = {
  label: PropTypes.string,
  width: PropTypes.string,
}
