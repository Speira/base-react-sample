import React from 'react'
import constants from '~utils/constants'

import { BackErrorLink, NotAllowedWrapper } from '~ErrorModule/components'

const { PATHS } = constants

/**
 * NotAllowedContainer
 * @component
 *
 */
function NotAllowedContainer() {
  return (
    <NotAllowedWrapper>
      <BackErrorLink to={PATHS.DEFAULT} />
    </NotAllowedWrapper>
  )
}

export default NotAllowedContainer
