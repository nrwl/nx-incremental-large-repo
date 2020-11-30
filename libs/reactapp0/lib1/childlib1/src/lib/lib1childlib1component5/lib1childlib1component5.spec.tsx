import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component5 from './lib1childlib1component5';

describe('Lib1childlib1component5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component5 />);
    expect(baseElement).toBeTruthy();
  });
});
