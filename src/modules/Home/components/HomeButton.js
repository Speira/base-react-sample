import React from 'react'
import PropTypes from 'prop-types'
import Button from '~components/Button'

/**
 * HomeButton
 * @component
 *
 */
function HomeButton(props) {
  const { danger, ...rest } = props
  let color = 'success'
  if (danger) color = 'danger'
  return <Button color={color} {...rest} />
}
HomeButton.defaultProps = {
  danger: false,
}
HomeButton.propTypes = {
  danger: PropTypes.bool,
}

export default HomeButton
