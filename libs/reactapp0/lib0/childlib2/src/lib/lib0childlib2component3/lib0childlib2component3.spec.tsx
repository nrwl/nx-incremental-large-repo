import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib2component3 from './lib0childlib2component3';

describe('Lib0childlib2component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib2component3 />);
    expect(baseElement).toBeTruthy();
  });
});
