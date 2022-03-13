import React from 'react'
import { shallow } from 'enzyme'

import Alert from './index'

const message = 'test'
const onClose = jest.fn()
const wrapper = shallow(<Alert onClose={onClose} message={message} />)

describe('render', () => {
  it('Alert must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Alert must show the provided message', () => {
    expect(wrapper.find('.text-message').text()).toEqual(
      expect.stringContaining(message),
    )
  })
  it('Alert must have a type', () => {
    expect(['info', 'warning', 'success', 'danger']).toEqual(
      expect.arrayContaining([wrapper.props().status]),
    )
  })
  it('Alert onClose handler behaviors', () => {
    expect(onClose).not.toHaveBeenCalled()
    expect(wrapper.props().active).toEqual(1)
    wrapper.find('button.closebtn').simulate('click')
    expect(onClose).toHaveBeenCalled()
    expect(wrapper.props().active).toEqual(0)
  })
  it('Alert array message display', () => {
    wrapper.setProps({ message: ['test', 'test'] })
    expect(wrapper.find('.text-message')).toHaveLength(0)
    expect(wrapper.find('li')).toHaveLength(2)
  })
})
