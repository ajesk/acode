import React from 'react';
import { render } from '@testing-library/react';
import Commit from './Commit';

describe('commit', () => {
  const commit = {
    sha: 'ajdflkah392iauk',
    repo: 'fackall',
    message: 'adsfn,vxmz,mnlknf dsfsdf',
    created_at: 'today'

  };
  test('snapshot', () => {
    expect(render(<Commit commit={commit} />)).toMatchSnapshot();
  });
});