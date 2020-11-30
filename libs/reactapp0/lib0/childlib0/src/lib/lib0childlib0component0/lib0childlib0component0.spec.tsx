import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component0 from './lib0childlib0component0';

describe('Lib0childlib0component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component0 />);
    expect(baseElement).toBeTruthy();
  });
});
