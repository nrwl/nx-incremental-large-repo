import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component18 from './lib1childlib3component18';

describe('Lib1childlib3component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component18 />);
    expect(baseElement).toBeTruthy();
  });
});
