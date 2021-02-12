import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component9 from './lib1childlib3component9';

describe('Lib1childlib3component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component9 />);
    expect(baseElement).toBeTruthy();
  });
});
