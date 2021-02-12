import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component43 from './lib1childlib0component43';

describe('Lib1childlib0component43', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component43 />);
    expect(baseElement).toBeTruthy();
  });
});
