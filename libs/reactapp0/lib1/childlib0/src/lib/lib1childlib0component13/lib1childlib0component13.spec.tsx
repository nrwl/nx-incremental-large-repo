import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib0component13 from './lib1childlib0component13';

describe('Lib1childlib0component13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib0component13 />);
    expect(baseElement).toBeTruthy();
  });
});
