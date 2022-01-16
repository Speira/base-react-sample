import React from 'react'
import constants from '~utils/constants'

import { NotAllowedWrapper } from '~ErrorModule/components/WrapperError'
import { BackErrorLink } from '~ErrorModule/components/ErrorLink'

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
