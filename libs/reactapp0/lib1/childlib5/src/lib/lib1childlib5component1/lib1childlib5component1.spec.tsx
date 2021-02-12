import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib5component1 from './lib1childlib5component1';

describe('Lib1childlib5component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib5component1 />);
    expect(baseElement).toBeTruthy();
  });
});
