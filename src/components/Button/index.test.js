import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

const wrapper = shallow(<Button />);

describe('render', () => {
  it('Button must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
