import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component12 from './lib1childlib8component12';

describe('Lib1childlib8component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component12 />);
    expect(baseElement).toBeTruthy();
  });
});
