import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component44 from './lib2childlib1component44';

describe('Lib2childlib1component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component44 />);
    expect(baseElement).toBeTruthy();
  });
});
