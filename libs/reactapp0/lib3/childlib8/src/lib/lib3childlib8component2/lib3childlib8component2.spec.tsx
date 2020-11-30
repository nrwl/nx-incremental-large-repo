import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component2 from './lib3childlib8component2';

describe('Lib3childlib8component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component2 />);
    expect(baseElement).toBeTruthy();
  });
});
