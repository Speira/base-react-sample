import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'
import { colorsThemesList } from '~contexts/ThemeContext'

import { DropdownButton, DropdownContent } from './style'
import Dropdown from './index'

const handler = jest.fn()
const shallowWrapper = shallow(
  <Contexts>
    <Dropdown items={['1', '2', '3', '4']} handler={handler} />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(Dropdown)
  const wrapperButton = wrapper.find(DropdownButton)
  const wrapperContent = wrapper.find(DropdownContent)
  it('Dropdown must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Dropdown must have an array of items', () => {
    expect([expect.any(String)]).toEqual(
      expect.arrayContaining(wrapper.props().items),
    )
  })
  it('Dropdown can only have an preselected color', () => {
    expect([...colorsThemesList, undefined]).toEqual(
      expect.arrayContaining([wrapper.props().color]),
    )
  })
  it('Dropdown can a click event handler', () => {
    expect(wrapper.props().handler).toEqual(expect.any(Function))
  })
  it('DropdownButton must have button and content', () => {
    expect(wrapperButton).toBeDefined()
    expect(wrapperContent).toBeDefined()
  })
})
