import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib4component10 from './lib1childlib4component10';

describe('Lib1childlib4component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib4component10 />);
    expect(baseElement).toBeTruthy();
  });
});
