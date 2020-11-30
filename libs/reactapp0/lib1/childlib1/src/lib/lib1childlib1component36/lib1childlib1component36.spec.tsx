import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component36 from './lib1childlib1component36';

describe('Lib1childlib1component36', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component36 />);
    expect(baseElement).toBeTruthy();
  });
});
