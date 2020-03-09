import React from 'react';
import Contexts from '~contexts';
import { shallow } from 'enzyme';

import LoginContainer from './index';

const wrapper = shallow(
  <Contexts>
    <LoginContainer />
  </Contexts>,
);

describe('render', () => {
  it('LoginContainer must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
});
