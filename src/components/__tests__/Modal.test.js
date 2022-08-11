import React from 'react'
import { shallow } from 'enzyme'

import Modal from '~components/Modal'

const wrapper = shallow(<Modal />)

describe('render', () => {
  it('Modal must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
