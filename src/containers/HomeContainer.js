import React from 'react'
import { translate as t } from '~utils/functions'
import constants from '~utils/constants'
import Button from '~components/Button'
import Wrapper from '~components/Wrapper'

const { STATUS } = constants

/**
 * HomeContainer
 * @component
 *
 */
function HomeContainer() {
  const errorClick = () => undefinedFunction() //eslint-disable-line
  return (
    <Wrapper className="flex-column justify-content-start align-items-center">
      <Button status={STATUS.INFO}>{t`BUTTON`}</Button>
      <br />
      <Button
        onClick={errorClick}
        status={STATUS.DANGER}>{t`BUTTON_DANGER`}</Button>
    </Wrapper>
  )
}

export default HomeContainer
