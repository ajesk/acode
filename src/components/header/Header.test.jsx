import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('header', () => {
  const props = {
    pages: [
      {name: "adaf", id: 1},
      {name: "xyz", id: 2},
      {name: "mno", id: 3},
      {name: "page", id: 4}
    ],
    setPage: () => ''
  };
  test('snapshot', () => {
    expect(render(<Header {...props} />)).toMatchSnapshot();
  });
});
