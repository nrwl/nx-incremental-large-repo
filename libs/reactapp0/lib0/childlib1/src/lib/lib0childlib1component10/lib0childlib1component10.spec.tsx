import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib1component10 from './lib0childlib1component10';

describe('Lib0childlib1component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib1component10 />);
    expect(baseElement).toBeTruthy();
  });
});
