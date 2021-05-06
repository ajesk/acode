import React from 'react';
import { render } from '@testing-library/react';
import Commit from './Commit';

describe('commit', () => {
  const commit = {
    sha: 'ajdflkah392iauk',
    repo: 'nooooooo',
    message: 'adsfn,vxmz,mnlknf dsfsdf',
    created_at: 'today'

  };
  test('should contain sha', () => {
    const { getByText } = render(<Commit commit={commit} />);

    expect(getByText(commit.sha)).toBeTruthy();
  });
  test('should contain repo', () => {
    const { getByText } = render(<Commit commit={commit} />);

    expect(getByText(commit.repo)).toBeTruthy();
  });
  test('should contain message', () => {
    const { getByText } = render(<Commit commit={commit} />);

    expect(getByText(commit.message)).toBeTruthy();
  });
  test('should contain created_at', () => {
    const { getByText } = render(<Commit commit={commit} />);

    expect(getByText(commit.created_at)).toBeTruthy();
  });

});