import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import List from './index'

const shallowWrapper = shallow(
  <Contexts>
    <List />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(List)
  it('List must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
