import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component3 from './lib0childlib0component3';

describe('Lib0childlib0component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component3 />);
    expect(baseElement).toBeTruthy();
  });
});
