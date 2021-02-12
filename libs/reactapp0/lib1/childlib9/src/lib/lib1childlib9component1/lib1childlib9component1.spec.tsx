import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component1 from './lib1childlib9component1';

describe('Lib1childlib9component1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component1 />);
    expect(baseElement).toBeTruthy();
  });
});
