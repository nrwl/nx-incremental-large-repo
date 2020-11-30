import React from 'react';
import { render } from '@testing-library/react';

import Lib3childlib3component17 from './lib3childlib3component17';

describe('Lib3childlib3component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib3childlib3component17 />);
    expect(baseElement).toBeTruthy();
  });
});
