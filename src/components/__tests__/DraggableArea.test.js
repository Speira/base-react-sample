import React from 'react'
import { shallow } from 'enzyme'

import DraggableArea from '~components/DraggableArea'

const wrapper = shallow(<DraggableArea />)

describe('render', () => {
  it('DraggableArea must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
