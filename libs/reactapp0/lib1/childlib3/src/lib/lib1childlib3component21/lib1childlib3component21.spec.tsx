import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component21 from './lib1childlib3component21';

describe('Lib1childlib3component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component21 />);
    expect(baseElement).toBeTruthy();
  });
});
