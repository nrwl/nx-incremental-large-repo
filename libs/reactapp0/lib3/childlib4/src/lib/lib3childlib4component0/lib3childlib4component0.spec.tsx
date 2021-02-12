import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component0 from './lib3childlib4component0';

describe('Lib3childlib4component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component0 />);
    expect(baseElement).toBeTruthy();
  });
});
