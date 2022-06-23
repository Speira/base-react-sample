import React from 'react'
import { shallow } from 'enzyme'

import Image from './index'

const wrapper = shallow(<Image />)

describe('render', () => {
  it('Image must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
