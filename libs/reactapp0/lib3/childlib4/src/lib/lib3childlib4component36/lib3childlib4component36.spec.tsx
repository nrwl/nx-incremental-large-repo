import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component36 from './lib3childlib4component36';

describe('Lib3childlib4component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component36 />);
    expect(baseElement).toBeTruthy();
  });
});
