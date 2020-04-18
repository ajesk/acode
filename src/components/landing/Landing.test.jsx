import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';

describe('landing', () => {
  test('snapshot', () => {
    expect(render(<Landing />)).toMatchSnapshot();
  });
});