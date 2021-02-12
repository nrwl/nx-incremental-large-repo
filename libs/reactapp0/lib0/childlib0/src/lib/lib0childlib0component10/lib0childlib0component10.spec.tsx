import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component10 from './lib0childlib0component10';

describe('Lib0childlib0component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component10 />);
    expect(baseElement).toBeTruthy();
  });
});
