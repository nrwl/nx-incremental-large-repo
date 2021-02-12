import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib8component12 from './lib3childlib8component12';

describe('Lib3childlib8component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib8component12 />);
    expect(baseElement).toBeTruthy();
  });
});
