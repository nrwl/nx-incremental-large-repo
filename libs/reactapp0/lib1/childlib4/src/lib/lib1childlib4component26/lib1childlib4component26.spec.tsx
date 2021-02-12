import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component26 from './lib1childlib4component26';

describe('Lib1childlib4component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component26 />);
    expect(baseElement).toBeTruthy();
  });
});
