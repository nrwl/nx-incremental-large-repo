import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component40 from './lib1childlib3component40';

describe('Lib1childlib3component40', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component40 />);
    expect(baseElement).toBeTruthy();
  });
});
