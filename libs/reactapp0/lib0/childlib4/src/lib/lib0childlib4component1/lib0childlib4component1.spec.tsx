import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component1 from './lib0childlib4component1';

describe('Lib0childlib4component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component1 />);
    expect(baseElement).toBeTruthy();
  });
});
