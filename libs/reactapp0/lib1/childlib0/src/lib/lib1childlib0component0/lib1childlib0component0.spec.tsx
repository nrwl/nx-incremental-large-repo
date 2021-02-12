import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component0 from './lib1childlib0component0';

describe('Lib1childlib0component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component0 />);
    expect(baseElement).toBeTruthy();
  });
});
