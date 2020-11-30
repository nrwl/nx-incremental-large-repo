import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib9component15 from './lib1childlib9component15';

describe('Lib1childlib9component15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib9component15 />);
    expect(baseElement).toBeTruthy();
  });
});
