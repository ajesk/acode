import React from 'react';
import { render } from '@testing-library/react';
import About from './About';

describe('about', () => {
  test('snapshot', () => {
    expect(render(<About />)).toMatchSnapshot();
  });
});
