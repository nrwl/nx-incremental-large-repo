import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component3 from './lib3childlib4component3';

describe('Lib3childlib4component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component3 />);
    expect(baseElement).toBeTruthy();
  });
});
