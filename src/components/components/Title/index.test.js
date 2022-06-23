import React from 'react'
import { shallow } from 'enzyme'

import Title from './index'

const wrapper = shallow(<Title type="h1" center status="info" />)

describe('render', () => {
  it('Title must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Title can have a status', () => {
    expect(wrapper.prop('status')).toEqual('info')
  })
  it('Title can be centered', () => {
    expect(wrapper.prop('className')).toEqual(expect.stringContaining('center'))
  })
})
