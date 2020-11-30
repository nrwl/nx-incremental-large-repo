import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component8 from './lib3childlib8component8';

describe('Lib3childlib8component8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component8 />);
    expect(baseElement).toBeTruthy();
  });
});
