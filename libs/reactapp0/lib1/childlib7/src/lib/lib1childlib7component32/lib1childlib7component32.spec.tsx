import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component32 from './lib1childlib7component32';

describe('Lib1childlib7component32', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component32 />);
    expect(baseElement).toBeTruthy();
  });
});
