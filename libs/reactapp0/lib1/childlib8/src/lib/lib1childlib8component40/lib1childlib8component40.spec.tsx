import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib8component40 from './lib1childlib8component40';

describe('Lib1childlib8component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib8component40 />);
    expect(baseElement).toBeTruthy();
  });
});
