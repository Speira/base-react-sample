import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import Words from './index'

const shallowWrapper = shallow(
  <Contexts>
    <Words />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(Words)
  it('Words must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
