import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component32 from './lib2childlib0component32';

describe('Lib2childlib0component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component32 />);
    expect(baseElement).toBeTruthy();
  });
});
