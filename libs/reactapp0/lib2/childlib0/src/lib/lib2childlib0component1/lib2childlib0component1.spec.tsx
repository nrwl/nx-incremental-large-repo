import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component1 from './lib2childlib0component1';

describe('Lib2childlib0component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component1 />);
    expect(baseElement).toBeTruthy();
  });
});
