/**
 * Root component test.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root.component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
});
