import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component15 from './lib3childlib8component15';

describe('Lib3childlib8component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component15 />);
    expect(baseElement).toBeTruthy();
  });
});
