import React from 'react'
import { shallow } from 'enzyme'
import * as AuthContext from '~contexts/AuthContext'
import * as useRouter from '~hooks/useRouter'

import NavbarContainer from '~containers/NavbarContainer'

describe('render NavbarContainer', () => {
  const isAuthenticated = jest.fn()
  const logout = jest.fn()
  const pathname = '/auth'

  jest
    .spyOn(AuthContext, 'useAuth')
    .mockReturnValue({ isAuthenticated, logout })

  jest.spyOn(useRouter, 'default').mockReturnValue({ pathname })
  const wrapper = shallow(<NavbarContainer />)

  it('NavbarContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
