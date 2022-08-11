import React from 'react'
import { shallow } from 'enzyme'

import Alert from '~components/Alert'

describe('render Alert', () => {
  const message = 'test'
  const onClose = jest.fn()
  const wrapper = shallow(<Alert onClose={onClose} message={message} />)

  it('Alert must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Alert must show the provided message', () => {
    expect(wrapper.find('.text-message').text()).toEqual(
      expect.stringContaining(message),
    )
  })
  it('Alert must have a status', () => {
    expect(wrapper.props().className).toEqual(expect.stringContaining('danger'))
  })
  it('Alert onClose handler behaviors', () => {
    expect(onClose).not.toHaveBeenCalled()
    expect(wrapper.props().className).toEqual(expect.stringContaining('open'))
    wrapper.find('.close-alert').simulate('click')
    expect(onClose).toHaveBeenCalled()
    expect(wrapper.props().className).not.toEqual(
      expect.stringContaining('open'),
    )
  })
  it('Alert array message display', () => {
    wrapper.setProps({ message: ['test', 'test'] })
    expect(wrapper.find('.text-message')).toHaveLength(0)
    expect(wrapper.find('li')).toHaveLength(2)
  })
})
