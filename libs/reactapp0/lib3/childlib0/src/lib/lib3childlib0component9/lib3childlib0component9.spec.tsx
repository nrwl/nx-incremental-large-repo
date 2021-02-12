import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component9 from './lib3childlib0component9';

describe('Lib3childlib0component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component9 />);
    expect(baseElement).toBeTruthy();
  });
});
