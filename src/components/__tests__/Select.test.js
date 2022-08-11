import React from 'react'
import { shallow } from 'enzyme'

import Select from '~components/Select'

const wrapper = shallow(<Select />)

describe('render', () => {
  it('Select must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
