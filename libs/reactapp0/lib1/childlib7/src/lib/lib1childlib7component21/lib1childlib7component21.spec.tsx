import React from 'react';
import { render } from '@testing-library/react';

import Lib1childlib7component21 from './lib1childlib7component21';

describe('Lib1childlib7component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Lib1childlib7component21 />);
    expect(baseElement).toBeTruthy();
  });
});
