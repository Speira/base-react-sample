import React from 'react'
import { useError } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import ErrorBoundary from '~ErrorModule/ErrorBoundary'

const { SERVER } = constants.ERRORS

/**
 * ErrorContainer
 * @desc :::
 *    Hook adapted function for connecting ErrorBoundary with useError context
 *
 */
export default function ErrorContainer(props) {
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

export { default as ClientErrorContainer } from './ClientErrorContainer'
