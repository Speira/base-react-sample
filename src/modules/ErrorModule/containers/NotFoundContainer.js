import React from 'react'
import constants from '~utils/constants'

import { NotFoundWrapper } from '~ErrorModule/components/WrapperError'
import { BackErrorLink } from '~ErrorModule/components/ErrorLink'

const { PATHS } = constants

/**
 * NotFoundContainer
 * @component
 *
 */
function NotFoundContainer() {
  return (
    <NotFoundWrapper>
      <BackErrorLink to={PATHS.DEFAULT} />
    </NotFoundWrapper>
  )
}

export default NotFoundContainer
