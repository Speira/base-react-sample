import React from 'react';
import { shallow } from 'enzyme';

import HeaderContainer from './index';

const wrapper = shallow(<HeaderContainer />);

describe('render', () => {
  it('HeaderContainer must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
