import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component11 from './lib0childlib0component11';

describe('Lib0childlib0component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component11 />);
    expect(baseElement).toBeTruthy();
  });
});
