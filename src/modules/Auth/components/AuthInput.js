import React from 'react';
// import PropTypes from 'prop-types'

import Input from '~components/Input';

/**
 * AuthInput
 * @component
 *
 */
function AuthInput(props) {
  const styledProps = {
    margin: '0 1em',
  };

  return <Input {...styledProps} {...props} />;
}
AuthInput.defaultProps = {};
AuthInput.propTypes = {};

export default AuthInput;
