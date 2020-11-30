import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component0 from './lib1childlib3component0';

describe('Lib1childlib3component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component0 />);
    expect(baseElement).toBeTruthy();
  });
});
