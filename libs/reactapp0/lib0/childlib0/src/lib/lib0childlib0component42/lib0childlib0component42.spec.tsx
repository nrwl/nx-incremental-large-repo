import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component42 from './lib0childlib0component42';

describe('Lib0childlib0component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component42 />);
    expect(baseElement).toBeTruthy();
  });
});
