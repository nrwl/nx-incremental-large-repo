import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component12 from './lib1childlib1component12';

describe('Lib1childlib1component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component12 />);
    expect(baseElement).toBeTruthy();
  });
});
