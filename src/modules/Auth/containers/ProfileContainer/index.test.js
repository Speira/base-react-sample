import React from 'react';
import { shallow } from 'enzyme';

import AuthInput from '~Auth/components/AuthInput';
import AuthButton from '~Auth/components/AuthButton';
import * as AuthContext from '~contexts/AuthContext';

import ProfileContainer from './index';

const update = jest.fn();

jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => ({
  update,
  user: { username: 'toto', password: '123' },
}));

const wrapper = shallow(<ProfileContainer />);

describe('render', () => {
  it('ProfileContainer must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
  it('ProfileContainer must have inputs', () => {
    const inputs = wrapper.find(AuthInput);
    expect(inputs).toHaveLength(1);
  });
  it('ProfileContainer must have username input', () => {
    const username = wrapper.find(AuthInput).at(0);
    username.simulate('change', { target: { value: 'test' } });
    expect(
      wrapper
        .find(AuthInput)
        .at(0)
        .props().value,
    ).toEqual('test');
  });
  it('ProfileContainer must have buttons', () => {
    const buttons = wrapper.find(AuthButton);
    expect(buttons).toHaveLength(2);
  });
});
