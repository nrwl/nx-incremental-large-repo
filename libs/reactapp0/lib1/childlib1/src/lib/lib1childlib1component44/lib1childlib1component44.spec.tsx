import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component44 from './lib1childlib1component44';

describe('Lib1childlib1component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component44 />);
    expect(baseElement).toBeTruthy();
  });
});
