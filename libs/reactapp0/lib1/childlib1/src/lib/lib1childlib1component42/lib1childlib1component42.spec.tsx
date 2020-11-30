import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component42 from './lib1childlib1component42';

describe('Lib1childlib1component42', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component42 />);
    expect(baseElement).toBeTruthy();
  });
});
