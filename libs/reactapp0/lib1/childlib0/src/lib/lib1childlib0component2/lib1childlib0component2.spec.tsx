import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component2 from './lib1childlib0component2';

describe('Lib1childlib0component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component2 />);
    expect(baseElement).toBeTruthy();
  });
});
