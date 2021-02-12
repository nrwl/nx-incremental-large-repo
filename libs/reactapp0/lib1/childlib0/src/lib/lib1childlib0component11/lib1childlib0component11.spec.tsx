import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component11 from './lib1childlib0component11';

describe('Lib1childlib0component11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component11 />);
    expect(baseElement).toBeTruthy();
  });
});
