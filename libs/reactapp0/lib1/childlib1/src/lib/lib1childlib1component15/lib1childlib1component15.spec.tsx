import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component15 from './lib1childlib1component15';

describe('Lib1childlib1component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component15 />);
    expect(baseElement).toBeTruthy();
  });
});
