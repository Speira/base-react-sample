import React from 'react';
// import PropTypes from 'prop-types'

import Alert from '~components/Alert';

/**
 * AuthAlert
 * @component
 *
 */
function AuthAlert(props) {
  return <Alert {...props} />;
}
AuthAlert.defaultProps = {};
AuthAlert.propTypes = {};

export default AuthAlert;
