import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib1component48 from './lib1childlib1component48';

describe('Lib1childlib1component48', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib1component48 />);
    expect(baseElement).toBeTruthy();
  });
});
