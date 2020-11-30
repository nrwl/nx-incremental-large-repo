import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component1 from './lib1childlib8component1';

describe('Lib1childlib8component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component1 />);
    expect(baseElement).toBeTruthy();
  });
});
