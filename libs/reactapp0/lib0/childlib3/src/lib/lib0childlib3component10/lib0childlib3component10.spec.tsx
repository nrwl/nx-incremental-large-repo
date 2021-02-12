import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib3component10 from './lib0childlib3component10';

describe('Lib0childlib3component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib3component10 />);
    expect(baseElement).toBeTruthy();
  });
});
