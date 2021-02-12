import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib1component1 from './lib2childlib1component1';

describe('Lib2childlib1component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib1component1 />);
    expect(baseElement).toBeTruthy();
  });
});
