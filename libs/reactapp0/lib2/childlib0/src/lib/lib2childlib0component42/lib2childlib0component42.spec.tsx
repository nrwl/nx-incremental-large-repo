import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component42 from './lib2childlib0component42';

describe('Lib2childlib0component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component42 />);
    expect(baseElement).toBeTruthy();
  });
});
