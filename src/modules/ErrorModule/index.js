import React from 'react'
import { useError } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import ErrorBoundary from './ErrorBoundary'

const { SERVER } = constants.ERRORS

/**
 * ErrorModule
 * @desc :::
 *    Hook adapted function for connecting ErrorBoundary with useError context
 *
 */
function ErrorModule(props) {
  const { setError, hasError } = useError()
  const handleSyncError = () =>
    setError({
      type: SERVER,
      message: 'Oops something went wrong, please contact the developer.',
    })
  return (
    <ErrorBoundary
      {...props}
      hasAsyncError={hasError}
      handleSyncError={handleSyncError}
    />
  )
}
export { default as NotFoundContainer } from './containers/NotFoundContainer'
export { default as NotAllowedContainer } from './containers/NotAllowedContainer'
export default ErrorModule
