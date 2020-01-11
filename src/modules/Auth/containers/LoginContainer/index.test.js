import React from 'react';
import { shallow } from 'enzyme';

import LoginContainer from './index';

const wrapper = shallow(<LoginContainer />);

describe('render', () => {
  it('LoginContainer must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
