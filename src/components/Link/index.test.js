import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import Link from './index'

const shallowWrapper = shallow(
  <Contexts>
    <Link href="#" boxactive />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(Link)
  it('Link must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('Link must have an uri', () => {
    const { to, href } = wrapper.props()
    expect([href, to]).toEqual(expect.arrayContaining([expect.any(String)]))
  })
  it('Link can have an boxactive prop', () => {
    const { boxactive } = wrapper.props()
    expect([expect.any(Boolean), undefined]).toEqual(
      expect.arrayContaining([boxactive]),
    )
  })
  it('Link can have an variant prop', () => {
    const { variant } = wrapper.props()
    expect([expect.any(String), undefined]).toEqual(
      expect.arrayContaining([variant]),
    )
  })
  it('Link can have an size prop', () => {
    const { size } = wrapper.props()
    expect([expect.any(String), undefined]).toEqual(
      expect.arrayContaining([size]),
    )
  })
})
