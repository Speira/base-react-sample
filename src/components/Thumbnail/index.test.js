import React from 'react'
import { shallow } from 'enzyme'

import Thumbnail from './index'

const wrapper = shallow(<Thumbnail />)

describe('render', () => {
  it('Thumbnail must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
