import React from 'react'
import WrapperHome from '~Home/components/WrapperHome'
import { DefaultButton, DangerButton } from '~Home/components/HomeButton'

/**
 * HomeContainer
 * @component
 *
 */
function HomeContainer(props) {
  // eslint-disable-next-line
  const errorClick = () => undefinedFunction()
  return (
    <WrapperHome {...props}>
      <DefaultButton />
      <br />
      <DangerButton onClick={errorClick} />
    </WrapperHome>
  )
}

export default HomeContainer
