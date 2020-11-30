import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib5component0 from './lib0childlib5component0';

describe('Lib0childlib5component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib5component0 />);
    expect(baseElement).toBeTruthy();
  });
});
