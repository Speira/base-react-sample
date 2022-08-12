import React from 'react'
import constants from '~utils/constants'
import { useError } from '~contexts/ErrorContext'
import { translate as t } from '~utils/functions'

import Link from '~components/Link'
import Title from '~components/Title'
import Wrapper from '~components/Wrapper'

const { PATHS } = constants

/**
 * ServerErrorContainer
 * @component
 *
 */
function ServerErrorContainer() {
  const { resetError } = useError()
  return (
    <Wrapper
      customStyle={{ height: '100vh' }}
      className="bg-secondary flex-column align-items-center justify-content-center">
      <Title>{t`ERROR_500`}</Title>
      <p>{t`ERROR_500_MESSAGE`}</p>
      <Link to={PATHS.DEFAULT} onClick={resetError}>{t`BACK_HOME`}</Link>
    </Wrapper>
  )
}

export default ServerErrorContainer
