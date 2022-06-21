import React from 'react'
import constants from '~utils/constants'
import { useError } from '~contexts/ErrorContext'
import { translate as t } from '~utils/functions'

import Link from '~components/Link'
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
      <Link to={PATHS.DEFAULT} onClick={resetError}>{t`BACK_HOME`}</Link>
    </FullpageWrapper>
  )
}

export default ServerErrorContainer
