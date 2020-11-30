import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component27 from './lib1childlib3component27';

describe('Lib1childlib3component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component27 />);
    expect(baseElement).toBeTruthy();
  });
});
