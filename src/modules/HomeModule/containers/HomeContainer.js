import React from 'react'

import HomeWrapper from '~HomeModule/components/HomeWrapper'

import {
  DefaultButton,
  DangerButton,
} from '~HomeModule/factory/SimpleButtonFactory'

/**
 * HomeContainer
 * @component
 *
 */
function HomeContainer(props) {
  // eslint-disable-next-line
  const errorClick = () => undefinedFunction()
  return (
    <HomeWrapper {...props}>
      <DefaultButton />
      <br />
      <DangerButton onClick={errorClick} />
    </HomeWrapper>
  )
}

export default HomeContainer
