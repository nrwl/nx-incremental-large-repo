import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component44 from './lib1childlib3component44';

describe('Lib1childlib3component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component44 />);
    expect(baseElement).toBeTruthy();
  });
});
