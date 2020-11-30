import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component22 from './lib1childlib8component22';

describe('Lib1childlib8component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component22 />);
    expect(baseElement).toBeTruthy();
  });
});
