import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component37 from './lib3childlib3component37';

describe('Lib3childlib3component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component37 />);
    expect(baseElement).toBeTruthy();
  });
});
