import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component32 from './lib3childlib0component32';

describe('Lib3childlib0component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component32 />);
    expect(baseElement).toBeTruthy();
  });
});
