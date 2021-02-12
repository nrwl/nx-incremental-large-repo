import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component37 from './lib3childlib4component37';

describe('Lib3childlib4component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component37 />);
    expect(baseElement).toBeTruthy();
  });
});
