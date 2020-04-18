import React from 'react';
import { render } from '@testing-library/react';
import Content from './Content';

describe('content', () => {
  const page = {
    name: 'this is a name',
    component: <div />
  }
  test('snapshot', () => {
    expect(render(<Content page={page} />)).toMatchSnapshot();
  });
});
