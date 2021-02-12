import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component4 from './lib1childlib0component4';

describe('Lib1childlib0component4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component4 />);
    expect(baseElement).toBeTruthy();
  });
});
