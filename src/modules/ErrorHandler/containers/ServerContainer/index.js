import React from 'react'
import { useError } from '~contexts/ErrorContext'
import WrapperError from '~ErrorHandler/components/WrapperError'
import ErrorLink from '~ErrorHandler/components/ErrorLink'

const backMessage = 'Back to Home'

/**
 * ServerContainer
 * @component
 *
 */
function ServerContainer() {
  const { errorMessage, resetError } = useError()
  return (
    <WrapperError fullpage>
      <p>Server Error (500): {errorMessage}</p>
      <ErrorLink to="/" onClick={resetError}>
        {backMessage}
      </ErrorLink>
    </WrapperError>
  )
}
ServerContainer.defaultProps = {}
ServerContainer.propTypes = {}

export default ServerContainer
