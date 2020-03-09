import React from 'react';
// import PropTypes from 'prop-types'

import Button from '~components/Button';

/**
 * AuthButton
 * @component
 *
 */
function AuthButton(props) {
  return <Button color="info" {...props} />;
}
AuthButton.defaultProps = {};
AuthButton.propTypes = {};

export default AuthButton;
