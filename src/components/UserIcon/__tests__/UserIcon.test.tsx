import React from 'react';
import { render } from '@testing-library/react';

// Components
import UserIcon from '../UserIcon';

describe('UserIcon', () => {
  it('should render UserIcon correctly', () => {
    const { container } = render(<UserIcon />);
    expect(container).toMatchSnapshot();
  });
});
