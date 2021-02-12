import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component25 from './lib1childlib0component25';

describe('Lib1childlib0component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component25 />);
    expect(baseElement).toBeTruthy();
  });
});
