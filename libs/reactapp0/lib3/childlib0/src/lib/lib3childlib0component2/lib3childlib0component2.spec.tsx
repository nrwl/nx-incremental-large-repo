import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component2 from './lib3childlib0component2';

describe('Lib3childlib0component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component2 />);
    expect(baseElement).toBeTruthy();
  });
});
