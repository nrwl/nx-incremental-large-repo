import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component32 from './lib3childlib8component32';

describe('Lib3childlib8component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component32 />);
    expect(baseElement).toBeTruthy();
  });
});
