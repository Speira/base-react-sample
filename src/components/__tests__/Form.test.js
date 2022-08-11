import React from 'react'
import { shallow } from 'enzyme'

import Form from '~components/Form'

const wrapper = shallow(<Form />)

describe('render', () => {
  it('Form must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
