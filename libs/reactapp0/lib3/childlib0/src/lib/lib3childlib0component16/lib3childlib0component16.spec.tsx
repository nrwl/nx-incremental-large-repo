import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib0component16 from './lib3childlib0component16';

describe('Lib3childlib0component16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib0component16 />);
    expect(baseElement).toBeTruthy();
  });
});
