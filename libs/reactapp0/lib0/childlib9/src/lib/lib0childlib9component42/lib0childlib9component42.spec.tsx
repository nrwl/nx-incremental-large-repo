import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib9component42 from './lib0childlib9component42';

describe('Lib0childlib9component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib9component42 />);
    expect(baseElement).toBeTruthy();
  });
});
