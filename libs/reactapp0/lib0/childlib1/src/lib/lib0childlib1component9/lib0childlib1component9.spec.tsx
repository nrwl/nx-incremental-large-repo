import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component9 from './lib0childlib1component9';

describe('Lib0childlib1component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component9 />);
    expect(baseElement).toBeTruthy();
  });
});
