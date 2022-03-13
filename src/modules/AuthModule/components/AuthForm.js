import React from 'react'
// import PropTypes from 'prop-types'

import BaseForm from '~components/Form'

/**
 * AuthForm
 * @component
 *
 */
function AuthForm(props) {
  return <BaseForm className="column" width="24em" {...props} />
}
AuthForm.defaultProps = {}
AuthForm.propTypes = {}

export default AuthForm
