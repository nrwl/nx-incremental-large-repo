import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component5 from './lib1childlib3component5';

describe('Lib1childlib3component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component5 />);
    expect(baseElement).toBeTruthy();
  });
});
