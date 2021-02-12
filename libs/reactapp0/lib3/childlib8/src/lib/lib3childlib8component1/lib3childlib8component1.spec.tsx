import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component1 from './lib3childlib8component1';

describe('Lib3childlib8component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component1 />);
    expect(baseElement).toBeTruthy();
  });
});
