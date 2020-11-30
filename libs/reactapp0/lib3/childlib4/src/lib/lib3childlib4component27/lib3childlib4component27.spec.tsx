import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component27 from './lib3childlib4component27';

describe('Lib3childlib4component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component27 />);
    expect(baseElement).toBeTruthy();
  });
});
