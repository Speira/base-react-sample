import React from 'react'

import {
  DefaultButton,
  DangerButton,
  HomeWrapper,
} from '~HomeModule/components'

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
