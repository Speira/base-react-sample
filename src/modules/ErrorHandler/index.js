import React from 'react';
import { useError } from '~contexts/ErrorContext';
import constants from '~utils/constants';
import ErrorBoundary from './ErrorBoundary';

const { SERVER } = constants.ERRORS;

/**
 * ErrorHandler
 * Hook adapted version for ErrorBoundary
 *
 */
function ErrorHandler(props) {
  const { setError, hasError } = useError();
  const handleSyncError = () =>
    setError({
      type: SERVER,
      message: 'Oops something went wrong, please contact the developer.',
    });
  return (
    <ErrorBoundary
      {...props}
      hasAsyncError={hasError}
      handleSyncError={handleSyncError}
    />
  );
}
export { default as NotFound } from './containers/NotFoundContainer';
export default ErrorHandler;
