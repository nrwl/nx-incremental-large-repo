import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component3 from './lib3childlib8component3';

describe('Lib3childlib8component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component3 />);
    expect(baseElement).toBeTruthy();
  });
});
