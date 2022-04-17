import React from 'react'
import constants from '~utils/constants'
import { useError } from '~contexts/ErrorContext'

import { BackErrorLink, ServerErrorWrapper } from '~ErrorModule/components'

const { PATHS } = constants

/**
 * ServerErrorContainer
 * @component
 *
 */
function ServerErrorContainer() {
  const { resetError } = useError()
  return (
    <ServerErrorWrapper isFullpage>
      <BackErrorLink to={PATHS.DEFAULT} onClick={resetError} />
    </ServerErrorWrapper>
  )
}

export default ServerErrorContainer
