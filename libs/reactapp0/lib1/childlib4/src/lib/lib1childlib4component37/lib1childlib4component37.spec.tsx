import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component37 from './lib1childlib4component37';

describe('Lib1childlib4component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component37 />);
    expect(baseElement).toBeTruthy();
  });
});
