import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component6 from './lib3childlib0component6';

describe('Lib3childlib0component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component6 />);
    expect(baseElement).toBeTruthy();
  });
});
