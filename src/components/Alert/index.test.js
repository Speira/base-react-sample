import React from 'react';
import { shallow } from 'enzyme';

import Alert from './index';

const wrapper = shallow(<Alert />);

describe('render', () => {
  it('Alert must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
