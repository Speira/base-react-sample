import React from 'react'
import { shallow } from 'enzyme'

import BodyContainer from '~LayoutModule/containers/BodyContainer'

const wrapper = shallow(<BodyContainer />)

describe('render', () => {
  it('BodyContainer must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
