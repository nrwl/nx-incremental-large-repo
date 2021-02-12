import React from 'react';
import { render } from '@testing-library/react';

import Lib0childlib0component4 from './lib0childlib0component4';

describe('Lib0childlib0component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib0childlib0component4 />);
    expect(baseElement).toBeTruthy();
  });
});
