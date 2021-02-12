import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component31 from './lib1childlib8component31';

describe('Lib1childlib8component31', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component31 />);
    expect(baseElement).toBeTruthy();
  });
});
