import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('footer', () => {
  test('snapshot', () => {
    expect(render(<Footer />)).toMatchSnapshot();
  });
});
