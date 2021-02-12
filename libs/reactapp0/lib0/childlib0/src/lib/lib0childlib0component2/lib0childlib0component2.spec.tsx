import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component2 from './lib0childlib0component2';

describe('Lib0childlib0component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component2 />);
    expect(baseElement).toBeTruthy();
  });
});
