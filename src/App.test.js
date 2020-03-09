import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Contexts from '~contexts';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  await act(async () => {
    ReactDOM.render(
      <Contexts>
        <App />
      </Contexts>,
      div,
    );
  });
  ReactDOM.unmountComponentAtNode(div);
});
