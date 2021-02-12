import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component5 from './lib1childlib8component5';

describe('Lib1childlib8component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component5 />);
    expect(baseElement).toBeTruthy();
  });
});
