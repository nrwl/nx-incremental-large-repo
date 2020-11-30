import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component38 from './lib1childlib3component38';

describe('Lib1childlib3component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component38 />);
    expect(baseElement).toBeTruthy();
  });
});
