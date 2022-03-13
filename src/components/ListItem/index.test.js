import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import ListItem from './index'

const shallowWrapper = shallow(
  <Contexts>
    <ListItem>Item</ListItem>
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(ListItem)
  it('ListItem must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
