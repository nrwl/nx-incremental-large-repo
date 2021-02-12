import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib4component5 from './lib0childlib4component5';

describe('Lib0childlib4component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib4component5 />);
    expect(baseElement).toBeTruthy();
  });
});
