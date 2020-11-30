import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component5 from './lib0childlib2component5';

describe('Lib0childlib2component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component5 />);
    expect(baseElement).toBeTruthy();
  });
});
