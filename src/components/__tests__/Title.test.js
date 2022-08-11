import React from 'react'
import { shallow } from 'enzyme'

import Title from '~components/Title'

const wrapper = shallow(<Title type="h1" />)

describe('render', () => {
  it('Title must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Title must match the corresponding tag', () => {
    expect(wrapper.props().tag).toEqual('h1')
  })
})
