import React from 'react'
import { translate as t } from '~utils/functions'
import constants from '~utils/constants'
import Button from '~components/Button'
import HomeWrapper from '~HomeModule/components/HomeWrapper'

const { STATUS } = constants

/**
 * HomeContainer
 * @component
 *
 */
function HomeContainer(props) {
  const errorClick = () => undefinedFunction() //eslint-disable-line
  return (
    <HomeWrapper {...props}>
      <Button status={STATUS.INFO}>{t`BUTTON`}</Button>
      <br />
      <Button
        onClick={errorClick}
        status={STATUS.DANGER}>{t`BUTTON_DANGER`}</Button>
    </HomeWrapper>
  )
}

export default HomeContainer
