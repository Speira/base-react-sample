import React from 'react';
import { shallow } from 'enzyme';

import { Input } from './index';

const wrapper = shallow(<Input />);

describe('render', () => {
  it('Input must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
