import React from 'react';
import { render } from '@testing-library/react';
import Repository from './Repository';

describe('repository', () => {
  const repo = {
    id: 'ajdflkah392iauk',
    html_url: 'fackall',
    name: 'adsfn,vxmz,mnlknf dsfsdf',
    language: 'today',
    updated_at: 'today'
  };
  test('snapshot', () => {
    expect(render(<Repository repo={repo} />)).toMatchSnapshot();
  });
});