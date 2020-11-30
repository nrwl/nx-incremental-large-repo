import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component42 from './lib3childlib8component42';

describe('Lib3childlib8component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component42 />);
    expect(baseElement).toBeTruthy();
  });
});
