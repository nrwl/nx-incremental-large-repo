import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component12 from './lib1childlib3component12';

describe('Lib1childlib3component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component12 />);
    expect(baseElement).toBeTruthy();
  });
});
