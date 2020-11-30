import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component3 from './lib1childlib8component3';

describe('Lib1childlib8component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component3 />);
    expect(baseElement).toBeTruthy();
  });
});
