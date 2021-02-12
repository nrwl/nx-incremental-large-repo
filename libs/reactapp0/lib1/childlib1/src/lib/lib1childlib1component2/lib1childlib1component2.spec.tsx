import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component2 from './lib1childlib1component2';

describe('Lib1childlib1component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component2 />);
    expect(baseElement).toBeTruthy();
  });
});
