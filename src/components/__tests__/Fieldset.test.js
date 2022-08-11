import React from 'react'
import { shallow } from 'enzyme'

import Fieldset from '~components/Fieldset'

const wrapper = shallow(<Fieldset />)

describe('render', () => {
  it('Fieldset must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
