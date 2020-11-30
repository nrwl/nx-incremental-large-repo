import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component10 from './lib0childlib4component10';

describe('Lib0childlib4component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component10 />);
    expect(baseElement).toBeTruthy();
  });
});
