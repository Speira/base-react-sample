import React from 'react'
import constants from '~utils/constants'
import { useError } from '~contexts/ErrorContext'

import { ServerErrorWrapper } from '~ErrorModule/components/WrapperError'
import { BackErrorLink } from '~ErrorModule/components/ErrorLink'

const { PATHS } = constants

/**
 * ServerErrorContainer
 * @component
 *
 */
function ServerErrorContainer() {
  const { errorMessage, resetError } = useError()
  return (
    <ServerErrorWrapper fullpage details={errorMessage}>
      <BackErrorLink to={PATHS.DEFAULT} onClick={resetError} />
    </ServerErrorWrapper>
  )
}

export default ServerErrorContainer
