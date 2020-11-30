import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component32 from './lib1childlib0component32';

describe('Lib1childlib0component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component32 />);
    expect(baseElement).toBeTruthy();
  });
});
