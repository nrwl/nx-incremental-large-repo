import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component18 from './lib1childlib0component18';

describe('Lib1childlib0component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component18 />);
    expect(baseElement).toBeTruthy();
  });
});
