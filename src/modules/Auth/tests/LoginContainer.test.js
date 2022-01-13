import React from 'react'
import { shallow } from 'enzyme'

import * as AuthContext from '~contexts/AuthContext'

import LoginContainer from '~Auth/containers/LoginContainer'

const mockSetState = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial) => [initial, mockSetState],
  useEffect: jest.fn(),
}))

describe('render LoginContainer', () => {
  const signin = jest.fn()
  jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => ({
    signin,
  }))
  const wrapper = shallow(<LoginContainer />)

  it('LoginContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
