import React from 'react'
import { useError } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import ErrorBoundary from './ErrorBoundary'

const { SERVER } = constants.ERRORS

/**
 * ErrorContainer
 * @desc :::
 *    Hook adapted function for connecting ErrorBoundary with useError context
 *
 */
export function ErrorContainer(props) {
  const { setError, hasError, logError } = useError()
  const handleSyncError = () =>
    setError({
      type: SERVER,
    })
  return (
    <ErrorBoundary
      {...props}
      hasAsyncError={hasError}
      handleSyncError={handleSyncError}
      logError={logError}
    />
  )
}
export { default as NotFoundContainer } from './containers/NotFoundContainer'
export { default as NotAllowedContainer } from './containers/NotAllowedContainer'
export default () => null
