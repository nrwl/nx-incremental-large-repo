import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component18 from './lib3childlib8component18';

describe('Lib3childlib8component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component18 />);
    expect(baseElement).toBeTruthy();
  });
});
