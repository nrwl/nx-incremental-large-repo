import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component22 from './lib3childlib8component22';

describe('Lib3childlib8component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component22 />);
    expect(baseElement).toBeTruthy();
  });
});
