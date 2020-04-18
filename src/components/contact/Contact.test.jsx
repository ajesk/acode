import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';

describe('about', () => {
  test('snapshot', () => {
    expect(render(<Contact />)).toMatchSnapshot();
  });
});
