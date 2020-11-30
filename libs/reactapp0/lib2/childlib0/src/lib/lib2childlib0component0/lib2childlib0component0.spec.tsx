import React from 'react';
import { render } from '@testing-library/react';

import Lib2childlib0component0 from './lib2childlib0component0';

describe('Lib2childlib0component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib2childlib0component0 />);
    expect(baseElement).toBeTruthy();
  });
});
