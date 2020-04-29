import React from 'react';
import PropTypes from 'prop-types';
import Loading from '~components/Loading';

/**
 * AuthLoading
 * @component
 *
 */
function AuthLoading(props) {
  const { messageLogin, messageSignup, ...rest } = props;
  let message = '';
  if (messageLogin) message = 'Authentication in progress...';
  if (messageSignup) message = 'Registration in progress ...';
  return <Loading message={message} {...rest} />;
}
AuthLoading.defaultProps = {
  messageLogin: false,
  messageSignup: false,
};
AuthLoading.propTypes = {
  messageLogin: PropTypes.bool,
  messageSignup: PropTypes.bool,
};

export default AuthLoading;
