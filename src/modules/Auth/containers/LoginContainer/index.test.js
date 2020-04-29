import React from 'react';
import { shallow } from 'enzyme';

import AuthInput from '~Auth/components/AuthInput';
import AuthButton from '~Auth/components/AuthButton';
import * as AuthContext from '~contexts/AuthContext';

import LoginContainer from './index';

const switchAuth = jest.fn();
const signin = jest.fn();

jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => ({
  signin,
}));

const wrapper = shallow(<LoginContainer switchAuth={switchAuth} />);

describe('render', () => {
  it('LoginContainer must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
  it('LoginContainer must have inputs', () => {
    const inputs = wrapper.find(AuthInput);
    expect(inputs).toHaveLength(2);
  });
  it('LoginContainer must have username input', () => {
    const username = wrapper.find(AuthInput).at(0);
    username.simulate('change', { target: { value: 'test' } });
    expect(
      wrapper
        .find(AuthInput)
        .at(0)
        .props().value,
    ).toEqual('test');
  });
  it('LoginContainer must have buttons', () => {
    const buttons = wrapper.find(AuthButton);
    expect(buttons).toHaveLength(2);
  });
});
