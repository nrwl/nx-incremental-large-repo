import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component10 from './lib3childlib4component10';

describe('Lib3childlib4component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component10 />);
    expect(baseElement).toBeTruthy();
  });
});
