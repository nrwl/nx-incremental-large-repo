import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component3 from './lib1childlib1component3';

describe('Lib1childlib1component3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component3 />);
    expect(baseElement).toBeTruthy();
  });
});
