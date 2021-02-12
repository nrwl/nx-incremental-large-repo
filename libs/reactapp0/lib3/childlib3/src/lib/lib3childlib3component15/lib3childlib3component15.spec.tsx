import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component15 from './lib3childlib3component15';

describe('Lib3childlib3component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component15 />);
    expect(baseElement).toBeTruthy();
  });
});
