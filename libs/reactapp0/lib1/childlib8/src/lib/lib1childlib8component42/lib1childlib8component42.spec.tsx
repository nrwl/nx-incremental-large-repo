import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component42 from './lib1childlib8component42';

describe('Lib1childlib8component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component42 />);
    expect(baseElement).toBeTruthy();
  });
});
