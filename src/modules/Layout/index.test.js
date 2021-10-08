import React from 'react'
import { shallow } from 'enzyme'

import LayoutModule from './index'

const wrapper = shallow(<LayoutModule />)

describe('render', () => {
  it('LayoutModule must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
