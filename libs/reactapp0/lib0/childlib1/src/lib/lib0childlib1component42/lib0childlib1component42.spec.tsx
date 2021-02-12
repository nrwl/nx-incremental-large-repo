import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component42 from './lib0childlib1component42';

describe('Lib0childlib1component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component42 />);
    expect(baseElement).toBeTruthy();
  });
});
