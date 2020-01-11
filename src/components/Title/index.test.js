import React from 'react';
import { shallow } from 'enzyme';

import Title from './index';

const wrapper = shallow(<Title />);

describe('render', () => {
  it('Title must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
