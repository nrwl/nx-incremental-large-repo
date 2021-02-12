import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component12 from './lib1childlib0component12';

describe('Lib1childlib0component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component12 />);
    expect(baseElement).toBeTruthy();
  });
});
