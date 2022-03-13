import React from 'react'
import { shallow } from 'enzyme'

import Select from './index'

const wrapper = shallow(<Select />)

describe('render', () => {
  it('Select must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
