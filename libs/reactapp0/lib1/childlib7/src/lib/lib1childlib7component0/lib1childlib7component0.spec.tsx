import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component0 from './lib1childlib7component0';

describe('Lib1childlib7component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component0 />);
    expect(baseElement).toBeTruthy();
  });
});
