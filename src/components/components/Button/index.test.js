import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'
import { colorsThemesList } from '~contexts/ThemeContext'

import Button from './index'

const onClick = jest.fn()
const onBlur = jest.fn()
const shallowWrapper = shallow(
  <Contexts>
    <Button onClick={onClick} onBlur={onBlur} />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(Button)
  it('Button must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Button must call onClick hanlder when it is clicked', () => {
    expect(onClick).not.toHaveBeenCalled()
    wrapper.simulate('click')
    expect(onClick).toHaveBeenCalled()
  })
  it('Button must call onBlur hanlder when it is blured', () => {
    expect(onBlur).not.toHaveBeenCalled()
    wrapper.simulate('blur')
    expect(onBlur).toHaveBeenCalled()
  })
  it('Button can only have an preselected color', () => {
    expect([...colorsThemesList, undefined]).toEqual(
      expect.arrayContaining([wrapper.props().color]),
    )
  })
  it('Button can have inversed color', () => {
    expect([expect.any(Boolean), undefined]).toEqual(
      expect.arrayContaining([wrapper.props().inversed]),
    )
  })
  it('Button can have variants', () => {
    expect([undefined, 'rounded']).toEqual(
      expect.arrayContaining([wrapper.props().variant]),
    )
  })
  it('Button can have height and width', () => {
    expect([undefined, expect.any(String)]).toEqual(
      expect.arrayContaining([wrapper.props().width]),
    )
    expect([undefined, expect.any(String)]).toEqual(
      expect.arrayContaining([wrapper.props().height]),
    )
  })
  it('Button can be disabled', () => {
    expect([undefined, expect.any(Boolean)]).toEqual(
      expect.arrayContaining([wrapper.props().disabled]),
    )
  })
})
