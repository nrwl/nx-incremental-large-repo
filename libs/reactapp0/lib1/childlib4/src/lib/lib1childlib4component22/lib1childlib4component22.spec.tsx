import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component22 from './lib1childlib4component22';

describe('Lib1childlib4component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component22 />);
    expect(baseElement).toBeTruthy();
  });
});
