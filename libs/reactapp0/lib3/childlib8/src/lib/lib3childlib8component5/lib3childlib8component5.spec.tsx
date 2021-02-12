import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component5 from './lib3childlib8component5';

describe('Lib3childlib8component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component5 />);
    expect(baseElement).toBeTruthy();
  });
});
