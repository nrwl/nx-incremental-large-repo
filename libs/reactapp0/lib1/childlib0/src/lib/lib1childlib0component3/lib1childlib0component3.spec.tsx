import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component3 from './lib1childlib0component3';

describe('Lib1childlib0component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component3 />);
    expect(baseElement).toBeTruthy();
  });
});
