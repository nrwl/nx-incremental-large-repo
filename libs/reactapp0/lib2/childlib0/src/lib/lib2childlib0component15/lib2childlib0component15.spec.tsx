import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component15 from './lib2childlib0component15';

describe('Lib2childlib0component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component15 />);
    expect(baseElement).toBeTruthy();
  });
});
