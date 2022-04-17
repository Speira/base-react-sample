import React from 'react'
import constants from '~utils/constants'

import { BackErrorLink, NotFoundWrapper } from '~ErrorModule/components'

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
