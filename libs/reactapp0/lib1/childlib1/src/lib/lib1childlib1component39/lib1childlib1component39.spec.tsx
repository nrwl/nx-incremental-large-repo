import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component39 from './lib1childlib1component39';

describe('Lib1childlib1component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component39 />);
    expect(baseElement).toBeTruthy();
  });
});
