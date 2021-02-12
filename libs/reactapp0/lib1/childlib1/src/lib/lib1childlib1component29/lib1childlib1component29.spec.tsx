import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component29 from './lib1childlib1component29';

describe('Lib1childlib1component29', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component29 />);
    expect(baseElement).toBeTruthy();
  });
});
