import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component38 from './lib3childlib4component38';

describe('Lib3childlib4component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component38 />);
    expect(baseElement).toBeTruthy();
  });
});
