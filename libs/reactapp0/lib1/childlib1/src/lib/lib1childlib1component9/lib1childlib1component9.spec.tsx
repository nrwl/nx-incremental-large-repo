import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component9 from './lib1childlib1component9';

describe('Lib1childlib1component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component9 />);
    expect(baseElement).toBeTruthy();
  });
});
