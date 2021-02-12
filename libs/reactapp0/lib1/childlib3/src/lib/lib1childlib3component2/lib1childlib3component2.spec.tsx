import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component2 from './lib1childlib3component2';

describe('Lib1childlib3component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component2 />);
    expect(baseElement).toBeTruthy();
  });
});
