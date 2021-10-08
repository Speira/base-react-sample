import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import TableRow from './index'

const shallowWrapper = shallow(
  <Contexts>
    <TableRow />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(TableRow)
  it('TableRow must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
