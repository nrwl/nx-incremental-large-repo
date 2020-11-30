import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component9 from './lib2childlib0component9';

describe('Lib2childlib0component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component9 />);
    expect(baseElement).toBeTruthy();
  });
});
