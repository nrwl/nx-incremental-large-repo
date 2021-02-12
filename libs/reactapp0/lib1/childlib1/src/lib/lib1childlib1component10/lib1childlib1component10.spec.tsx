import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component10 from './lib1childlib1component10';

describe('Lib1childlib1component10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component10 />);
    expect(baseElement).toBeTruthy();
  });
});
