import React from 'react'
import { useError } from '~contexts/ErrorContext'
import constants from '~utils/constants'
import ErrorBoundaryModule from '~ErrorModule/ErrorBoundaryModule'

const { SERVER } = constants.ERRORS

/**
 * ErrorModule
 * @desc :::
 *    Hook adapted function for connecting ErrorBoundaryModule with useError context
 *
 */
export default function ErrorModule(props) {
  const { setError, hasError, logError } = useError()
  const handleSyncError = () =>
    setError({
      type: SERVER,
    })
  return (
    <ErrorBoundaryModule
      {...props}
      hasAsyncError={hasError}
      handleSyncError={handleSyncError}
      logError={logError}
    />
  )
}

export { default as ClientErrorContainer } from './ClientErrorContainer'
