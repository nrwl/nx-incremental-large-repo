import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component32 from './lib0childlib0component32';

describe('Lib0childlib0component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component32 />);
    expect(baseElement).toBeTruthy();
  });
});
