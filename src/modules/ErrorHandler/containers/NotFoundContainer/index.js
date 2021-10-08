import React from 'react'
import WrapperError from '~ErrorHandler/components/WrapperError'
import ErrorLink from '~ErrorHandler/components/ErrorLink'

/**
 * NotFoundContainer
 * @component
 *
 */
function NotFoundContainer() {
  const text = 'Error 404: Page not found.'
  const backText = 'Go home'
  return (
    <WrapperError>
      <p>{text}</p>
      <ErrorLink to="/">{backText}</ErrorLink>
    </WrapperError>
  )
}

export default NotFoundContainer
