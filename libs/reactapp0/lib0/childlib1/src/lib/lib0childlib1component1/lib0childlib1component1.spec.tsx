import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component1 from './lib0childlib1component1';

describe('Lib0childlib1component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component1 />);
    expect(baseElement).toBeTruthy();
  });
});
