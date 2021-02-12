import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component0 from './lib0childlib2component0';

describe('Lib0childlib2component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component0 />);
    expect(baseElement).toBeTruthy();
  });
});
