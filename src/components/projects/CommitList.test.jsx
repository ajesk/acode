import React from 'react';
import { render } from '@testing-library/react';
import CommitList from './CommitList';

describe('commitlist', () => {
  const commits = [
    {
      sha: 'ajdflkah392iauk',
      repo: 'fackall',
      message: 'adsfn,vxmz,mnlknf dsfsdf',
      created_at: 'today',
      type: 'PushEvent'
    }, {
      sha: '2222',
      repo: '2222',
      message: '22222',
      created_at: 'today',
      type: 'PushEvent'
    },
  ];
  test('snapshot', () => {
    
  });
});