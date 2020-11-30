import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component32 from './lib0childlib1component32';

describe('Lib0childlib1component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component32 />);
    expect(baseElement).toBeTruthy();
  });
});
