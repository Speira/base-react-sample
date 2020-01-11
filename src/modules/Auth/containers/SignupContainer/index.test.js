import React from 'react';
import { shallow } from 'enzyme';

import SignupContainer from './index';

const wrapper = shallow(<SignupContainer />);

describe('render', () => {
  it('SignupContainer must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
