import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component10 from './lib3childlib3component10';

describe('Lib3childlib3component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component10 />);
    expect(baseElement).toBeTruthy();
  });
});
