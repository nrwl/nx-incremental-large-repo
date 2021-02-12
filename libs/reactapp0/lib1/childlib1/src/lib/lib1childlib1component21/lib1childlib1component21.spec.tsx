import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component21 from './lib1childlib1component21';

describe('Lib1childlib1component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component21 />);
    expect(baseElement).toBeTruthy();
  });
});
