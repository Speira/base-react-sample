import React from 'react'
import { shallow } from 'enzyme'
import Contexts from '~contexts'

import Fieldset from '~components/Fieldset'
import Input from '~components/Input'
import Label from '~components/Label'
import InputField from '~components/InputField'

const shallowWrapper = shallow(
  <Contexts>
    <InputField label="test" width="20em" />
  </Contexts>,
)

describe('render', () => {
  const wrapper = shallowWrapper.find(InputField)
  it('InputField must be rendered', () => {
    expect(wrapper).toBeDefined()
  })
  it('InputField must have a Fieldset component', () => {
    expect(wrapper.dive().find(Fieldset)).toHaveLength(1)
  })
  it('InputField must have an Input component', () => {
    expect(wrapper.dive().find(Input)).toHaveLength(1)
  })
  it('InputField must have an Label component', () => {
    expect(wrapper.dive().find(Label)).toHaveLength(1)
  })
})
