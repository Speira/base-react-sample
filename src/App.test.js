import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('render', () => {
  const wrapper = shallow(<App />)

  it('App should be defined', () => {
    expect(wrapper).toBeDefined()
  })
  it('App must have Contexts wrapper', () => {
    expect(wrapper.find('Contexts')).toHaveLength(1)
  })
  it('App must have a single ErrorContainer ', () => {
    expect(wrapper.find('ErrorContainer')).toHaveLength(1)
  })
})
