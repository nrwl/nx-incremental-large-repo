import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib5component9 from './lib0childlib5component9';

describe('Lib0childlib5component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib5component9 />);
    expect(baseElement).toBeTruthy();
  });
});
