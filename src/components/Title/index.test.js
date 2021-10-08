import React from 'react'
import { shallow } from 'enzyme'
import { colorsThemesList } from '~contexts/ThemeContext'

import Title from './index'

const wrapper = shallow(<Title type="h1" color="info" />)

describe('render', () => {
  it('Title must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Title can only have an preselected color', () => {
    expect([...colorsThemesList, undefined]).toEqual(
      expect.arrayContaining([wrapper.props().color]),
    )
  })
})
