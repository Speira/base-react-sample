import React from 'react'
import { shallow } from 'enzyme'

import HeaderContainer from '~LayoutModule/containers/HeaderContainer'

const wrapper = shallow(<HeaderContainer />)

describe('render', () => {
  it('HeaderContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
