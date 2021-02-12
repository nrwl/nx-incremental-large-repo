import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component3 from './lib1childlib4component3';

describe('Lib1childlib4component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component3 />);
    expect(baseElement).toBeTruthy();
  });
});
