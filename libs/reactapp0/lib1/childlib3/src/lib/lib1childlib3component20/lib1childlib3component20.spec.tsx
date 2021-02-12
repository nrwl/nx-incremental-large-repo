import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib3component20 from './lib1childlib3component20';

describe('Lib1childlib3component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib3component20 />);
    expect(baseElement).toBeTruthy();
  });
});
