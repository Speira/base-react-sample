import React from 'react'
import constants from '~utils/constants'
import { useError } from '~contexts/ErrorContext'
import { translate as t } from '~utils/functions'

import ErrorLink from '~ErrorModule/components/ErrorLink'
import FullpageWrapper from '~ErrorModule/components/FullpageWrapper'

const { PATHS } = constants

/**
 * ServerErrorContainer
 * @component
 *
 */
function ServerErrorContainer() {
  const { resetError } = useError()
  return (
    <FullpageWrapper message={t`ERROR_500_MESSAGE`} title={t`ERROR_500`}>
      <ErrorLink to={PATHS.DEFAULT} onClick={resetError} label={t`BACK_HOME`} />
    </FullpageWrapper>
  )
}

export default ServerErrorContainer
