import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component10 from './lib3childlib8component10';

describe('Lib3childlib8component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component10 />);
    expect(baseElement).toBeTruthy();
  });
});
