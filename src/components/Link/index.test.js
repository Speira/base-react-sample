import React from 'react';
import { shallow } from 'enzyme';

import Link from './index';

const wrapper = shallow(<Link />);

describe('render', () => {
  it('Link must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
