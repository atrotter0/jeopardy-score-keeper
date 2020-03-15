import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('should render App correctly', () => {
    const { getByText } = render(<App />);
    const appHeader = getByText('5e app world builder');

    expect(appHeader).toBeTruthy();
    expect(appHeader).toBeInTheDocument();
  });
});
