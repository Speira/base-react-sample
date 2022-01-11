import React from 'react'
import PropTypes from 'prop-types'
import { withI18NWords } from '~contexts/I18NContext'
import Button from '~components/Button'
import constants from '~utils/constants'

const { STATUS } = constants

/**
 * AuthButton
 * @component
 *
 */
function AuthButton(props) {
  const { label, status } = props
  return (
    <Button className="center" status={status}>
      {label}
    </Button>
  )
}
AuthButton.defaultProps = {
  status: STATUS.INFO,
}
AuthButton.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.func,
}

export default AuthButton

export const ValidateButton = withI18NWords(({ words, ...props }) => (
  <AuthButton {...props} label={words.VALIDATE} status={STATUS.INFO} />
))
