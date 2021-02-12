import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component6 from './lib3childlib8component6';

describe('Lib3childlib8component6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component6 />);
    expect(baseElement).toBeTruthy();
  });
});
