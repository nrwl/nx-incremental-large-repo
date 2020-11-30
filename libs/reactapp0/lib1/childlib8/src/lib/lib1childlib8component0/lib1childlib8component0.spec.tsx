import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component0 from './lib1childlib8component0';

describe('Lib1childlib8component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component0 />);
    expect(baseElement).toBeTruthy();
  });
});
