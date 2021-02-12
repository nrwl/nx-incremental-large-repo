import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component32 from './lib3childlib3component32';

describe('Lib3childlib3component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component32 />);
    expect(baseElement).toBeTruthy();
  });
});
