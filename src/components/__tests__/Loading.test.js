import React from 'react'
import { shallow } from 'enzyme'

import Loading from '~components/Loading'

const wrapper = shallow(<Loading />)

describe('render', () => {
  it('Loading must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
