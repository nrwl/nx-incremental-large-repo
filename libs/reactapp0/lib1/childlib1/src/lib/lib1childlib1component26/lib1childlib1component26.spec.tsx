import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component26 from './lib1childlib1component26';

describe('Lib1childlib1component26', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component26 />);
    expect(baseElement).toBeTruthy();
  });
});
