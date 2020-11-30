import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component8 from './lib1childlib0component8';

describe('Lib1childlib0component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component8 />);
    expect(baseElement).toBeTruthy();
  });
});
