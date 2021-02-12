import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component22 from './lib1childlib7component22';

describe('Lib1childlib7component22', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component22 />);
    expect(baseElement).toBeTruthy();
  });
});
