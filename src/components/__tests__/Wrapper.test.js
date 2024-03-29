import React from 'react'
import { shallow } from 'enzyme'

import Wrapper from '~components/Wrapper'

const wrapper = shallow(<Wrapper />)

describe('render', () => {
  it('Wrapper must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
