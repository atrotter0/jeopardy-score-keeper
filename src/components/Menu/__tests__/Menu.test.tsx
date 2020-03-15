import React from 'react';
import { render } from '@testing-library/react';

// Components
import Menu from '../Menu';

describe('Menu', () => {
  it('should render Menu correctly', () => {
    const { getByText, container } = render(<Menu />);
    const foundText = getByText('Jeopardy Score Keeper');

    expect(foundText).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
