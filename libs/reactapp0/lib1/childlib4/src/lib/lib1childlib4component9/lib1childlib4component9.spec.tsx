import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component9 from './lib1childlib4component9';

describe('Lib1childlib4component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component9 />);
    expect(baseElement).toBeTruthy();
  });
});
