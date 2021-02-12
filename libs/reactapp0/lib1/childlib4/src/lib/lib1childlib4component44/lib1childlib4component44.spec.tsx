import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component44 from './lib1childlib4component44';

describe('Lib1childlib4component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component44 />);
    expect(baseElement).toBeTruthy();
  });
});
