import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib4component26 from './lib3childlib4component26';

describe('Lib3childlib4component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib4component26 />);
    expect(baseElement).toBeTruthy();
  });
});
