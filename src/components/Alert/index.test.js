import React from 'react';
import { shallow } from 'enzyme';

import Alert from './index';

const message = 'test';
const wrapper = shallow(<Alert message={message} />);

describe('render', () => {
  it('Alert must be rendered', () => {
    expect(wrapper).toBeDefined();
  });
  it('Alert must show the provided message', () => {
    expect(wrapper.find('.text-message').text()).toEqual(
      expect.stringContaining(message),
    );
  });
  it('Alert must have a type', () => {
    expect(['info', 'warning', 'success', 'danger']).toEqual(
      expect.arrayContaining([wrapper.props().variant]),
    );
  });
});
