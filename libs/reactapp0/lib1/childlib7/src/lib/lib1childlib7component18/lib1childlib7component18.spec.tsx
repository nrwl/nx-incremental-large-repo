import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component18 from './lib1childlib7component18';

describe('Lib1childlib7component18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component18 />);
    expect(baseElement).toBeTruthy();
  });
});
