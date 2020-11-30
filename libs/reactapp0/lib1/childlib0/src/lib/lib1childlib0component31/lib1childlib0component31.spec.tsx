import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component31 from './lib1childlib0component31';

describe('Lib1childlib0component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component31 />);
    expect(baseElement).toBeTruthy();
  });
});
