import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import TableRow from '~components/TableRow'

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
