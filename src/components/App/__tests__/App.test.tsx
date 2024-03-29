import React from 'react';
import { render } from '@testing-library/react';

// Components
import App from '../App';

describe('App', () => {
  it('should render App correctly', () => {
    const { getByText, container } = render(<App />);
    const foundText = getByText('Jeopardy Score Keeper');

    expect(foundText).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
