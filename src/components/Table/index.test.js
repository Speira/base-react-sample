import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'
import { colorsThemesList } from '~contexts/ThemeContext'

import Table from './index'

const shallowWrapper = shallow(
  <Contexts>
    <Table />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(Table)
  it('Table must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Table can only have an preselected color', () => {
    expect([...colorsThemesList, undefined]).toEqual(
      expect.arrayContaining([wrapper.props().color]),
    )
  })
})
