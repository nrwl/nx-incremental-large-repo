import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component17 from './lib1childlib7component17';

describe('Lib1childlib7component17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component17 />);
    expect(baseElement).toBeTruthy();
  });
});
