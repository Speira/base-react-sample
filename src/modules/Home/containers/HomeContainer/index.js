import React from 'react'
import WrapperHome from '~Home/components/WrapperHome'
import HomeButton from '~Home/components/HomeButton'

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
      <HomeButton>Button </HomeButton>
      <br />
      <HomeButton onClick={errorClick} danger>
        Button that cause error
      </HomeButton>
    </WrapperHome>
  )
}

export default HomeContainer
