import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component18 from './lib3childlib4component18';

describe('Lib3childlib4component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component18 />);
    expect(baseElement).toBeTruthy();
  });
});
