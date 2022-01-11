import React from 'react'
import PropTypes from 'prop-types'
import constants from '~utils/constants'
import { withI18NWords } from '~contexts/I18NContext'
import Button from '~components/Button'

const { STATUS } = constants
/**
 * HomeButton
 * @component
 *
 */
function HomeButton(props) {
  const { status, label, ...rest } = props
  return (
    <Button status={status} {...rest}>
      {label}
    </Button>
  )
}
HomeButton.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default HomeButton

export const DefaultButton = withI18NWords(({ words, ...props }) => (
  <HomeButton label={words.BUTTON} status={STATUS.SUCCESS} {...props} />
))

export const DangerButton = withI18NWords(({ words, ...props }) => (
  <HomeButton label={words.BUTTON_DANGER} status={STATUS.DANGER} {...props} />
))
