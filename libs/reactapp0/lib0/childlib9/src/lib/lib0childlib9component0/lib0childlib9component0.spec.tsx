import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib9component0 from './lib0childlib9component0';

describe('Lib0childlib9component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib9component0 />);
    expect(baseElement).toBeTruthy();
  });
});
