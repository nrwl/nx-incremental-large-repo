import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component42 from './lib1childlib3component42';

describe('Lib1childlib3component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component42 />);
    expect(baseElement).toBeTruthy();
  });
});
