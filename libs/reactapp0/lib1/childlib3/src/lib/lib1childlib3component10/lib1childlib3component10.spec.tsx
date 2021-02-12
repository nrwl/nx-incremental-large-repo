import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component10 from './lib1childlib3component10';

describe('Lib1childlib3component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component10 />);
    expect(baseElement).toBeTruthy();
  });
});
