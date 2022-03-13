import React from 'react'
import { shallow } from 'enzyme'

import Label from './index'

const wrapper = shallow(<Label />)

describe('render', () => {
  it('Label must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
