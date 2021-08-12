import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Stateless from './index';

describe('Stateless', () => {
  test('loads and displays greeting', async () => {
    const { getByText } = render(<Stateless>My stateless button</Stateless>);
    const button = getByText('My stateless button');
    expect(button).toBeDefined();
  });
});
