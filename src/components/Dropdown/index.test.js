import React from 'react';
import { shallow } from 'enzyme';

import Droptown from './index';

const wrapper = shallow(<Droptown />);

describe('render', () => {
  it('Droptown must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
