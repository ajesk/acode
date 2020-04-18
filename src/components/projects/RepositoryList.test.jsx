import React from 'react';
import { render } from '@testing-library/react';
import RepositoryList from './RepositoryList';

describe('repository list', () => {
  const repositories = [
    {
      id: 'ajdflkah392iauk',
      html_url: 'fackall',
      name: 'adsfn,vxmz,mnlknf dsfsdf',
      language: 'javer',
      updated_at: 'today'
    },{
      id: '222',
      html_url: '222',
      name: '2222',
      language: 'english',
      updated_at: '2222'
    }
];
  test('snapshot', () => {
    expect(render(<RepositoryList repositories={repositories} />)).toMatchSnapshot();
  });
});