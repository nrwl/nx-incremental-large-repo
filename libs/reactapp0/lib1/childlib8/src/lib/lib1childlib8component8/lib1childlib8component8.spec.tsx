import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component8 from './lib1childlib8component8';

describe('Lib1childlib8component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component8 />);
    expect(baseElement).toBeTruthy();
  });
});
