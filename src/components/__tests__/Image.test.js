import React from 'react'
import { shallow } from 'enzyme'

import Image from '~components/Image'

const wrapper = shallow(<Image />)

describe('render', () => {
  it('Image must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
