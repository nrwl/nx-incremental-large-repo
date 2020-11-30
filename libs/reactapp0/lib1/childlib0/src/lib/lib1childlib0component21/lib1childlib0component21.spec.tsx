import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component21 from './lib1childlib0component21';

describe('Lib1childlib0component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component21 />);
    expect(baseElement).toBeTruthy();
  });
});
