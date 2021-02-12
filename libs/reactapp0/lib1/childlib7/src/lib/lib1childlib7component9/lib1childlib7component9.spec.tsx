import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component9 from './lib1childlib7component9';

describe('Lib1childlib7component9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component9 />);
    expect(baseElement).toBeTruthy();
  });
});
