import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component44 from './lib3childlib3component44';

describe('Lib3childlib3component44', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component44 />);
    expect(baseElement).toBeTruthy();
  });
});
