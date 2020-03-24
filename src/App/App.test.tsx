import App from '.';
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
// @ts-ignore
describe('<App />', () => {
  // @ts-ignore
  test('renders without exploding', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
      div,
    );
  });
});
