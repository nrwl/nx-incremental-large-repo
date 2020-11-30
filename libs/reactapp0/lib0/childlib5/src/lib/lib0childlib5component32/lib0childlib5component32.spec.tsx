import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib5component32 from './lib0childlib5component32';

describe('Lib0childlib5component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib5component32 />);
    expect(baseElement).toBeTruthy();
  });
});
