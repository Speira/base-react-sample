import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import TableRowItem from './index'

const shallowWrapper = shallow(
  <Contexts>
    <TableRowItem />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(TableRowItem)
  it('TableRowItem must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
})
