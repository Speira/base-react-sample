import React from 'react'
import { shallow } from 'enzyme'

import Wysiwyg from '~components/Wysiwyg'

const wrapper = shallow(<Wysiwyg />)

describe('render', () => {
  it('Wysiwyg must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
