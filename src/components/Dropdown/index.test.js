import React from 'react';
import { shallow } from 'enzyme';

import Droptown from './index';

const wrapper = shallow(<Droptown items={['1', '2', '3', '4']} />);

describe('render', () => {
  it('Droptown must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
