import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib5component10 from './lib0childlib5component10';

describe('Lib0childlib5component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib5component10 />);
    expect(baseElement).toBeTruthy();
  });
});
