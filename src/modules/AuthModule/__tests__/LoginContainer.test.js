import React from 'react'
import { shallow } from 'enzyme'

import * as AuthContext from '~contexts/AuthContext'
import * as APIContext from '~contexts/APIContext'
import * as useRouter from '~hooks/useRouter'

import LoginContainer from '~AuthModule/LoginContainer'

const mockSetState = jest.fn()

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial) => [initial, mockSetState],
  useEffect: jest.fn(),
}))

describe('render LoginContainer', () => {
  const signin = jest.fn()
  const backToReferer = jest.fn()
  const sendRequest = jest.fn()
  jest.spyOn(useRouter, 'default').mockReturnValue({
    backToReferer,
  })
  jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => ({
    signin,
  }))
  jest.spyOn(APIContext, 'useAPI').mockReturnValue({ sendRequest })
  const wrapper = shallow(<LoginContainer />)

  it('LoginContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
