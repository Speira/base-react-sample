import React from 'react'
import { shallow } from 'enzyme'

import FooterContainer from './index'

const wrapper = shallow(<FooterContainer />)

describe('render', () => {
  it('FooterContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
