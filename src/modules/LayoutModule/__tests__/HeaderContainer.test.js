import React from 'react'
import { shallow } from 'enzyme'
import * as AuthContext from '~contexts/AuthContext'
import * as useRouter from '~hooks/useRouter'

import HeaderContainer from '~LayoutModule/containers/HeaderContainer'

describe('render HeaderContainer', () => {
  const isAuthenticated = jest.fn()
  const logout = jest.fn()
  const pathname = '/auth'

  jest
    .spyOn(AuthContext, 'useAuth')
    .mockReturnValue({ isAuthenticated, logout })

  jest.spyOn(useRouter, 'default').mockReturnValue({ pathname })
  const wrapper = shallow(<HeaderContainer />)

  it('HeaderContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
