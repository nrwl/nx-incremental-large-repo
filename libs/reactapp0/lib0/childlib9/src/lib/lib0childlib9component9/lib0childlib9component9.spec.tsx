import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib9component9 from './lib0childlib9component9';

describe('Lib0childlib9component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib9component9 />);
    expect(baseElement).toBeTruthy();
  });
});
