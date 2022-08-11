import React from 'react'
import { shallow } from 'enzyme'

import Textarea from '~components/Textarea'

const wrapper = shallow(<Textarea />)

describe('render', () => {
  it('Textarea must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
