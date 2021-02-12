import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component5 from './lib0childlib0component5';

describe('Lib0childlib0component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component5 />);
    expect(baseElement).toBeTruthy();
  });
});
