import React from 'react';
import WrapperError from '~ErrorHandler/components/WrapperError';
import ErrorLink from '~ErrorHandler/components/ErrorLink';

/**
 * NotAllowedContainer
 * @component
 *
 */
function NotAllowedContainer() {
  const text = 'Error 403: Forbidden.';
  const backText = 'Go home';
  return (
    <WrapperError>
      <p>{text}</p>
      <ErrorLink to="/">{backText}</ErrorLink>
    </WrapperError>
  );
}
NotAllowedContainer.defaultProps = {};
NotAllowedContainer.propTypes = {};

export default NotAllowedContainer;
