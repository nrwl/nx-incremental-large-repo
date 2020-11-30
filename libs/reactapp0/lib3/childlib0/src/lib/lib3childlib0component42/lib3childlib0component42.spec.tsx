import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component42 from './lib3childlib0component42';

describe('Lib3childlib0component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component42 />);
    expect(baseElement).toBeTruthy();
  });
});
