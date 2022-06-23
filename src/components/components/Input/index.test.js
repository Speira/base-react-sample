import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'
import { colorsThemesList } from '~contexts/ThemeContext'

import Input from './index'

const onChange = jest.fn()
const onBlur = jest.fn()
const shallowWrapper = shallow(
  <Contexts>
    <Input onBlur={onBlur} onChange={onChange} />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(Input)
  it('Input must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Input can only have an preselected color', () => {
    expect([...colorsThemesList, undefined]).toEqual(
      expect.arrayContaining([wrapper.props().color]),
    )
  })
  it('Input can a blur event handler', () => {
    expect(wrapper.props().onBlur).toEqual(expect.any(Function))
    expect(onBlur).not.toHaveBeenCalled()
    wrapper.simulate('blur')
    expect(onBlur).toHaveBeenCalled()
  })
  it('Input can a change event handler', () => {
    expect(wrapper.props().onChange).toEqual(expect.any(Function))
    expect(onChange).not.toHaveBeenCalled()
    wrapper.simulate('change')
    expect(onChange).toHaveBeenCalled()
  })
  it('Input can have a type attribute', () => {
    expect([expect.any(String), undefined]).toEqual(
      expect.arrayContaining([wrapper.props().type]),
    )
  })
})
