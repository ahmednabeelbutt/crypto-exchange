import React from 'react';
import { render } from '@testing-library/react';
import Banner from '../Components/banner';

describe('Banner component', () => {
  test('renders banner with correct text', () => {
    const { getByText } = render(<Banner />);
    const headingElement = getByText('Welcome to Crypto Exchange!');
    const paragraphElement = getByText('Discover amazing coins and blogs.');

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
