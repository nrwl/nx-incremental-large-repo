import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component22 from './lib1childlib1component22';

describe('Lib1childlib1component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component22 />);
    expect(baseElement).toBeTruthy();
  });
});
