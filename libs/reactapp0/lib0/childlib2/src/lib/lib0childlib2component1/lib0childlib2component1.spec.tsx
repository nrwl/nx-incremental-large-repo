import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component1 from './lib0childlib2component1';

describe('Lib0childlib2component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component1 />);
    expect(baseElement).toBeTruthy();
  });
});
