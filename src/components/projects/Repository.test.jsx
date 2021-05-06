import React from 'react';
import { render } from '@testing-library/react';
import Repository from './Repository';

describe('repository', () => {
  const repo = {
    id: 'ajdflkah392iauk',
    html_url: 'swoop.woop',
    name: 'adsfn,vxmz,mnlknf dsfsdf',
    language: 'scala',
    updated_at: 'yesterday'
  };
  test('should contain name', () => {
    const { getByText } = render(<Repository repo={repo} />);

    expect(getByText(repo.name)).toBeTruthy();
  });
  test('should contain language', () => {
    const { getByText } = render(<Repository repo={repo} />);

    expect(getByText(repo.language)).toBeTruthy();
  });
  test('should contain updated_at', () => {
    const { getByText } = render(<Repository repo={repo} />);

    expect(getByText(repo.updated_at)).toBeTruthy();
  });
});